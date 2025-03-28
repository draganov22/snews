using Microsoft.AspNetCore.Mvc;
using SportsNewsApp.Models;
using SportsNewsApp.Data;
using System.Threading.Tasks;
using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace SportsNewsApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly SportsNewsContext _context;

        public UsersController(SportsNewsContext context)
        {
            _context = context;
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
            // Simplified token generation logic (replace with actual implementation)
            return Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes($"{user.UserID}:{user.Username}"));
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
