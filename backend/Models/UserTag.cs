using System.ComponentModel.DataAnnotations.Schema;

namespace SportsNewsApp.Models
{
    public class UserTag
    {
        public int UserID { get; set; }

        [ForeignKey("UserID")]
        public User User { get; set; }

        public int TagID { get; set; }

        [ForeignKey("TagID")]
        public Tag Tag { get; set; }
    }
}
