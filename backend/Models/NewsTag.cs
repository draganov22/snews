using System.ComponentModel.DataAnnotations.Schema;

namespace SportsNewsApp.Models
{
    public class NewsTag
    {
        public int NewsID { get; set; }

        [ForeignKey("NewsID")]
        public News News { get; set; }

        public int TagID { get; set; }

        [ForeignKey("TagID")]
        public Tag Tag { get; set; }
    }
}
