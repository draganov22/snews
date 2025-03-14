using System.ComponentModel.DataAnnotations;

namespace SportsNewsApp.Models
{
    public class Tag
    {
        [Key]
        public int TagID { get; set; }

        [Required]
        [MaxLength(100)]
        public string TagName { get; set; }
    }
}
