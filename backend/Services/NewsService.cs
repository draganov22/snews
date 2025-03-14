using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SportsNewsApp.Models;
using SportsNewsApp.Data;

namespace SportsNewsApp.Services
{
    public class NewsService
    {
        private readonly SportsNewsContext _context;

        public NewsService(SportsNewsContext context)
        {
            _context = context;
        }

        public async Task<List<News>> GetNews(int categoryId, int[] tagIds)
        {
            var newsQuery = _context.News.AsQueryable();

            if (categoryId > 0)
            {
                newsQuery = newsQuery.Where(n => n.CategoryID == categoryId);
            }

            if (tagIds != null && tagIds.Length > 0)
            {
                newsQuery = newsQuery.Where(n => n.Tags.Any(nt => tagIds.Contains(nt.TagID)));
            }

            return await newsQuery.ToListAsync();
        }

        public async Task<News> GetNewsByID(int newsId)
        {
            return await _context.News
                .Include(n => n.Images)
                .Include(n => n.Tags)
                .ThenInclude(nt => nt.Tag)
                .FirstOrDefaultAsync(n => n.NewsID == newsId);
        }

        public async Task<News> CreateNews(News news, string[] imageLinks, string videoLink, int[] tagIds)
        {
            _context.News.Add(news);
            await _context.SaveChangesAsync();

            if (imageLinks != null)
            {
                foreach (var link in imageLinks)
                {
                    _context.NewsImages.Add(new NewsImage { NewsID = news.NewsID, ImageLink = link });
                }
            }

            if (tagIds != null)
            {
                foreach (var tagId in tagIds)
                {
                    _context.NewsTags.Add(new NewsTag { NewsID = news.NewsID, TagID = tagId });
                }
            }

            await _context.SaveChangesAsync();
            return news;
        }
    }
}