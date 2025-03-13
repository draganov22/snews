using Microsoft.AspNetCore.Mvc;
using SportsNewsApp.Models;
using SportsNewsApp.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SportsNewsApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly NewsService _newsService;

        public NewsController(NewsService newsService)
        {
            _newsService = newsService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<NewsItem>>> GetAllNews()
        {
            var newsItems = await _newsService.FetchAllNews();
            return Ok(newsItems);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<NewsItem>> GetNewsById(int id)
        {
            var newsItem = await _newsService.FetchNewsById(id);
            if (newsItem == null)
            {
                return NotFound();
            }
            return Ok(newsItem);
        }

        [HttpPost]
        public async Task<ActionResult<NewsItem>> AddNews([FromBody] NewsItem newsItem)
        {
            if (newsItem == null)
            {
                return BadRequest();
            }

            var createdNewsItem = await _newsService.CreateNews(newsItem);
            return CreatedAtAction(nameof(GetNewsById), new { id = createdNewsItem.ArticleId }, createdNewsItem);
        }
    }
}