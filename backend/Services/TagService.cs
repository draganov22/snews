using SportsNewsApp.Models;
using SportsNewsApp.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace SportsNewsApp.Services
{
    public class TagService
    {
        private readonly SportsNewsContext _context;

        public TagService(SportsNewsContext context)
        {
            _context = context;
        }

        public async Task<List<Tag>> GetTags()
        {
            return await _context.Tags.ToListAsync();
        }
    }
}
