using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using sports_news_app.Models;
using sports_news_app.Data;

namespace sports_news_app.Services
{
    public class NewsService
    {
        private readonly SportsNewsContext _context;

        public NewsService(SportsNewsContext context)
        {
            _context = context;
        }

        public async Task<List<NewsItem>> FetchAllNews()
        {
            return await _context.NewsArticles.ToListAsync();
        }

        public async Task<NewsItem> FetchNewsById(int id)
        {
            return await _context.NewsArticles.FindAsync(id);
        }

        public async Task<NewsItem> CreateNews(NewsItem newsItem)
        {
            _context.NewsArticles.Add(newsItem);
            await _context.SaveChangesAsync();
            return newsItem;
        }
    }
}