using SportsNewsApp.Models;
using SportsNewsApp.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SportsNewsApp.Services
{
    public class CategoryService
    {
        private readonly SportsNewsContext _context;

        public CategoryService(SportsNewsContext context)
        {
            _context = context;
        }

        public async Task<List<Category>> GetCategories()
        {
            return await _context.Categories.ToListAsync();
        }

        public async Task<Category> CreateCategory(Category category)
        {
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();
            return category;
        }
    }
}
