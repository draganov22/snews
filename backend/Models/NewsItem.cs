using System;

namespace SportsNewsApp.Models
{
    public class NewsItem
    {
        public int ArticleId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public int CategoryId { get; set; }
        public string Tags { get; set; }
        public string VideoUrl { get; set; }
        public string Images { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}