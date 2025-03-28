using Microsoft.AspNetCore.Mvc;
using SportsNewsApp.Models;
using SportsNewsApp.Data;
using System.Threading.Tasks;
using System;
using System.Linq;
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

        [HttpPost("register")]
        public async Task<IActionResult> Register(User user)
        {
            // Check if user already exists
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Username == user.Username);
            if (existingUser != null)
            {
                return BadRequest("User already exists.");
            }

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
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = System.Text.Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, user.UserID.ToString()),
                    new Claim(ClaimTypes.Name, user.Username)
                }),
                Expires = DateTime.UtcNow.AddMinutes(int.Parse(_configuration["Jwt:ExpiryInMinutes"])),
                Issuer = _configuration["Jwt:Issuer"],
                Audience = _configuration["Jwt:Audience"],
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
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
        public async Task<IActionResult> UpdateUserFavorites(int userId, int categoryId, int[] tagIds)
        {
            var user = await _context.Users
                .Include(u => u.Tags)
                .FirstOrDefaultAsync(u => u.UserID == userId);

            if (user == null)
            {
                return NotFound();
            }

            // Update favorite category
            user.FavoriteCategoryID = categoryId;

            // Update favorite tags
            user.Tags.Clear();
            foreach (var tagId in tagIds)
            {
                user.Tags.Add(new UserTag { UserID = userId, TagID = tagId });
            }

            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
