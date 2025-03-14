using SportsNewsApp.Models;
using SportsNewsApp.Data;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace SportsNewsApp.Services
{
    public class UserService
    {
        private readonly SportsNewsContext _context;

        public UserService(SportsNewsContext context)
        {
            _context = context;
        }

        public async Task<User> Register(User user)
        {
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Username == user.Username);
            if (existingUser != null)
            {
                return null; // User already exists
            }

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> Login(string username, string passwordHash)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Username == username && u.PasswordHash == passwordHash);
        }

        public async Task<object> GetUserFavorites(int userId)
        {
            var user = await _context.Users
                .Include(u => u.FavoriteCategory)
                .Include(u => u.Tags)
                .ThenInclude(ut => ut.Tag)
                .FirstOrDefaultAsync(u => u.UserID == userId);

            if (user == null)
            {
                return null;
            }

            return new
            {
                FavoriteCategory = user.FavoriteCategory,
                FavoriteTags = user.Tags.Select(ut => ut.Tag).ToList()
            };
        }

        public async Task<bool> UpdateUserFavorites(int userId, int categoryId, int[] tagIds)
        {
            var user = await _context.Users
                .Include(u => u.Tags)
                .FirstOrDefaultAsync(u => u.UserID == userId);

            if (user == null)
            {
                return false;
            }

            user.FavoriteCategoryID = categoryId;
            user.Tags.Clear();
            foreach (var tagId in tagIds)
            {
                user.Tags.Add(new UserTag { UserID = userId, TagID = tagId });
            }

            await _context.SaveChangesAsync();
            return true;
        }
    }
}
