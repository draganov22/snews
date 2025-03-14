using Microsoft.AspNetCore.Mvc;
using SportsNewsApp.Models;
using SportsNewsApp.Data;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace SportsNewsApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NewsController : ControllerBase
    {
        private readonly SportsNewsContext _context;

        public NewsController(SportsNewsContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetNews([FromQuery] int? categoryId, [FromQuery] int[] tagIds)
        {
            var newsQuery = _context.News.AsQueryable();

            if (categoryId != null && categoryId > 0)
            {
                newsQuery = newsQuery.Where(n => n.CategoryID == categoryId);
            }

            if (tagIds != null && tagIds.Length > 0)
            {
                newsQuery = newsQuery.Where(n => n.Tags.Any(nt => tagIds.Contains(nt.TagID)));
            }

            var news = await newsQuery.ToListAsync();
            return Ok(news);
        }

        [HttpGet("{newsId}")]
        public async Task<IActionResult> GetNewsByID(int newsId)
        {
            var news = await _context.News
                .Include(n => n.Images)
                .Include(n => n.Tags)
                .ThenInclude(nt => nt.Tag)
                .FirstOrDefaultAsync(n => n.NewsID == newsId);

            if (news == null)
            {
                return NotFound();
            }

            return Ok(news);
        }

        [HttpPost]
        public async Task<IActionResult> CreateNews([FromBody] News news)
        {
            if (!User.IsInRole("Admin"))
            {
                return Forbid();
            }

            _context.News.Add(news);
            await _context.SaveChangesAsync();

            if (news.Images != null)
            {
                foreach (var link in news.Images)
                {
                    _context.NewsImages.Add(new NewsImage { NewsID = news.NewsID, ImageLink = link.ImageLink });
                }
            }

            if (news.Tags != null)
            {
                foreach (var tag in news.Tags)
                {
                    _context.NewsTags.Add(new NewsTag { NewsID = news.NewsID, TagID = tag.TagID });
                }
            }

            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetNewsByID), new { newsId = news.NewsID }, news);
        }
    }
}