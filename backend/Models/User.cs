using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace SportsNewsApp.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }

        [Required]
        [MaxLength(100)]
        public string Username { get; set; }

        [Required]
        public string PasswordHash { get; set; }

        public int FavoriteCategoryID { get; set; }

        [ForeignKey("FavoriteCategoryID")]
        public Category FavoriteCategory { get; set; }

        public ICollection<UserTag> Tags { get; set; } = new List<UserTag>();
    }
}
