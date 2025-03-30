using Microsoft.AspNetCore.Mvc;
using SportsNewsApp.Models;
using SportsNewsApp.Data;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;

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
        [Authorize]
        public async Task<IActionResult> GetNews([FromQuery] int? categoryId, [FromQuery] string tagIds)
        {
            var newsQuery = _context.News
                .Include(n => n.Images)
                .Include(n => n.Tags)
                .ThenInclude(nt => nt.Tag)
                .AsQueryable();

            if (categoryId != null && categoryId > 0)
            {
                newsQuery = newsQuery.Where(n => n.CategoryID == categoryId);
            }

            if (!string.IsNullOrEmpty(tagIds))
            {
                var tagIdArray = tagIds.Split(',').Select(int.Parse).ToArray();
                newsQuery = newsQuery.Where(n => n.Tags.Any(nt => tagIdArray.Contains(nt.TagID)));
            }

            var news = await newsQuery
                .Select(n => new
                {
                    newsID = n.NewsID,
                    title = n.Title,
                    content = n.Content,
                    categoryID = n.CategoryID,
                    videoLink = n.VideoLink,
                    publishDate = n.PublishDate,
                    tags = n.Tags.Select(nt => nt.Tag).ToList(),
                    images = n.Images.Select(ni => ni.ImageLink).ToList()
                })
                .ToListAsync();

            return Ok(news);
        }

        [HttpGet("{newsId}")]
        [Authorize]
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

            var article = new
            {
                newsID = news.NewsID,
                title = news.Title,
                content = news.Content,
                categoryID = news.CategoryID,
                videoLink = news.VideoLink,
                publishDate = news.PublishDate,
                tags = news.Tags.Select(nt => nt.Tag).ToList(),
                images = news.Images.Select(ni => ni.ImageLink).ToList()
            };            

            return Ok(article);
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> CreateNews([FromBody] News news)
        {
            // Ensure PublishDate is set to a valid value
            if (news.PublishDate == default)
            {
                news.PublishDate = DateTime.Now;
            }

            _context.News.Add(news);
            await _context.SaveChangesAsync();

            // // Ensure images are added only once
            // if (news.Images != null && !_context.NewsImages.Any(ni => ni.NewsID == news.NewsID))
            // {
            //     var imagesToAdd = news.Images.Select(link => new NewsImage { NewsID = news.NewsID, ImageLink = link.ImageLink }).ToList();
            //     _context.NewsImages.AddRange(imagesToAdd);
            //     await _context.SaveChangesAsync();
            // }

            // Reload the created news with related data to return
            var createdNews = await _context.News
                .Include(n => n.Images)
                .Include(n => n.Tags)
                .ThenInclude(nt => nt.Tag)
                .FirstOrDefaultAsync(n => n.NewsID == news.NewsID);

            var response = new
            {
                newsID = createdNews.NewsID,
                title = createdNews.Title,
                content = createdNews.Content,
                categoryID = createdNews.CategoryID,
                videoLink = createdNews.VideoLink,
                publishDate = createdNews.PublishDate,
                tags = createdNews.Tags.Select(nt => new { nt.TagID, nt.Tag.TagName }).ToList(),
                images = createdNews.Images.Select(ni => ni.ImageLink).ToList()
            };

            return CreatedAtAction(nameof(GetNews), new { newsId = createdNews.NewsID }, response);
        }

        [HttpPut("{newsId}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> EditNews(int newsId, [FromBody] News updatedNews)
        {
            var existingNews = await _context.News
                .Include(n => n.Images)
                .Include(n => n.Tags)
                .FirstOrDefaultAsync(n => n.NewsID == newsId);

            if (existingNews == null)
            {
                return NotFound();
            }

            existingNews.Title = updatedNews.Title;
            existingNews.Content = updatedNews.Content;
            existingNews.CategoryID = updatedNews.CategoryID;
            existingNews.VideoLink = updatedNews.VideoLink;

            // Update images
            _context.NewsImages.RemoveRange(existingNews.Images);
            if (updatedNews.Images != null)
            {
                foreach (var link in updatedNews.Images)
                {
                    _context.NewsImages.Add(new NewsImage { NewsID = newsId, ImageLink = link.ImageLink });
                }
            }

            // Update tags
            _context.NewsTags.RemoveRange(existingNews.Tags);
            if (updatedNews.Tags != null)
            {
                foreach (var tag in updatedNews.Tags)
                {
                    _context.NewsTags.Add(new NewsTag { NewsID = newsId, TagID = tag.TagID });
                }
            }

            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{newsId}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteNews(int newsId)
        {
            var news = await _context.News
                .Include(n => n.Images)
                .Include(n => n.Tags)
                .FirstOrDefaultAsync(n => n.NewsID == newsId);

            if (news == null)
            {
                return NotFound();
            }

            _context.NewsImages.RemoveRange(news.Images);
            _context.NewsTags.RemoveRange(news.Tags);
            _context.News.Remove(news);

            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}