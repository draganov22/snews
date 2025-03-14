using Microsoft.EntityFrameworkCore;
using SportsNewsApp.Models;

namespace SportsNewsApp.Data
{
    public class SportsNewsContext : DbContext
    {
        public SportsNewsContext(DbContextOptions<SportsNewsContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<NewsImage> NewsImages { get; set; }
        public DbSet<UserTag> UserTags { get; set; }
        public DbSet<NewsTag> NewsTags { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserTag>()
                .HasKey(ut => new { ut.UserID, ut.TagID });

            modelBuilder.Entity<NewsTag>()
                .HasKey(nt => new { nt.NewsID, nt.TagID });

            modelBuilder.Entity<User>()
                .HasMany(u => u.Tags)
                .WithOne(ut => ut.User)
                .HasForeignKey(ut => ut.UserID);

            // Configure entity relationships and constraints here if needed
        }
    }
}