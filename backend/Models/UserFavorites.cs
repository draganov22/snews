namespace SportsNewsApp.Models
{
    public class UserFavorites
    {
        public int CategoryId { get; set; }
        public int[] TagIds { get; set; }
    }
}
