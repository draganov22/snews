using Microsoft.EntityFrameworkCore;

namespace SportsNewsApp.Data
{
    public class SportsNewsContext : DbContext
    {
        public SportsNewsContext(DbContextOptions<SportsNewsContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<NewsItem> NewsArticles { get; set; }
        public DbSet<UserFavorite> UserFavorites { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure entity relationships and constraints here if needed
        }
    }
}