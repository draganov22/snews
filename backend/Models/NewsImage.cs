using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportsNewsApp.Models
{
    public class NewsImage
    {
        [Key]
        public int NewsImageID { get; set; }

        public int NewsID { get; set; }

        [ForeignKey("NewsID")]
        public News News { get; set; }

        [Required]
        public string ImageLink { get; set; }
    }
}
