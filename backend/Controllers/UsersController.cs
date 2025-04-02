using Microsoft.AspNetCore.Mvc;
using SportsNewsApp.Models;
using SportsNewsApp.Data;
using System.Threading.Tasks;
using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;

namespace SportsNewsApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly SportsNewsContext _context;
        private readonly IConfiguration _configuration;

        public UsersController(SportsNewsContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]        
        public async Task<IActionResult> CreateUser(User user)
        {
            // Check if user already exists
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Username == user.Username);
            if (existingUser != null)
            {
                return BadRequest("User already exists.");
            }

            // Initialize missing fields
            user.FavoriteCategoryID = user.FavoriteCategoryID ?? 1; // Default to 1 if null
            user.Tags = user.Tags ?? new List<UserTag>();

            // Add new user
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok(user);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(User user)
        {
            // Authenticate user
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Username == user.Username && u.PasswordHash == user.PasswordHash);
            if (existingUser == null)
            {
                return Unauthorized();
            }

            // Generate token
            var token = GenerateToken(existingUser);
            return Ok(new { Token = token });
        }

        private string GenerateToken(User user)
        {
            // Ensure user.Tags are loaded
            if (user.Tags == null || !user.Tags.Any())
            {
                user.Tags = _context.UserTags
                    .Where(ut => ut.UserID == user.UserID)
                    .Include(ut => ut.Tag)
                    .ToList();
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = System.Text.Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.UserID.ToString()),
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, user.IsAdmin ? "Admin" : "User"),
                new Claim("favoriteCategoryID", user.FavoriteCategoryID?.ToString() ?? string.Empty),
                new Claim("tags", string.Join(",", user.Tags.Select(t => t.TagID)))
            };

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddMinutes(int.Parse(_configuration["Jwt:ExpiryInMinutes"])),
                Issuer = _configuration["Jwt:Issuer"],
                Audience = _configuration["Jwt:Audience"],
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _context.Users
                .Include(u => u.Tags)
                .ThenInclude(ut => ut.Tag)
                .ToListAsync();

            var result = users.Select(user => new
            {
                user.UserID,
                user.Username,
                user.FavoriteCategoryID,
                user.PasswordHash,
                user.IsAdmin,
                Tags = user.Tags.Select(ut => ut.Tag).ToList()
            });

            return Ok(result);
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetUserById(int userId)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserID == userId);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [Authorize]
        [HttpGet("{userId}/favorites")]
        public async Task<IActionResult> GetUserFavorites(int userId)
        {
            var user = await _context.Users
                .Include(u => u.FavoriteCategory)
                .Include(u => u.Tags)
                .ThenInclude(ut => ut.Tag)
                .FirstOrDefaultAsync(u => u.UserID == userId);

            if (user == null)
            {
                return NotFound();
            }

            var favorites = new
            {
                FavoriteCategory = user.FavoriteCategory,
                FavoriteTags = user.Tags.Select(ut => ut.Tag).ToList()
            };

            return Ok(favorites);
        }

        [Authorize]
        [HttpPut("{userId}/favorites")]
        public async Task<IActionResult> UpdateUserFavorites(int userId, [FromBody] UserFavorites request)
        {
            var user = await _context.Users
                .Include(u => u.Tags)
                .FirstOrDefaultAsync(u => u.UserID == userId);

            if (user == null)
            {
                return NotFound();
            }

            // Update favorite category
            user.FavoriteCategoryID = request.CategoryId;

            // Update favorite tags
            user.Tags.Clear();
            foreach (var tagId in request.TagIds)
            {
                user.Tags.Add(new UserTag { UserID = userId, TagID = tagId });
            }

            await _context.SaveChangesAsync();
            return Ok();
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{userId}")]
        public async Task<IActionResult> EditUser(int userId, [FromBody] User updatedUser)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserID == userId);
            if (user == null)
            {
                return NotFound();
            }

            user.Username = updatedUser.Username;
            user.PasswordHash = updatedUser.PasswordHash;
            user.FavoriteCategoryID = updatedUser.FavoriteCategoryID;
            // Update other fields as necessary

            await _context.SaveChangesAsync();
            return Ok(user);
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{userId}")]
        public async Task<IActionResult> DeleteUser(int userId)
        {
            var user = await _context.Users
                .Include(u => u.Tags)
                .FirstOrDefaultAsync(u => u.UserID == userId);

            if (user == null)
            {
                return NotFound();
            }

            // Remove associated tags
            _context.UserTags.RemoveRange(user.Tags);

            // Remove user
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
