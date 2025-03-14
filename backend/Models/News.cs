using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportsNewsApp.Models
{
    public class News
    {
        [Key]
        public int NewsID { get; set; }

        [Required]
        [MaxLength(200)]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }

        public int CategoryID { get; set; }

        [ForeignKey("CategoryID")]
        public Category Category { get; set; }

        public string VideoLink { get; set; }

        [Required]
        public DateTime PublishDate { get; set; }

        public ICollection<NewsImage> Images { get; set; }
        public ICollection<NewsTag> Tags { get; set; }
    }
}
