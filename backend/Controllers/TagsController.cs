using Microsoft.AspNetCore.Mvc;
using SportsNewsApp.Models;
using SportsNewsApp.Data;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Microsoft.AspNetCore.Authorization;

namespace SportsNewsApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TagsController : ControllerBase
    {
        private readonly SportsNewsContext _context;

        public TagsController(SportsNewsContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetTags()
        {
            var tags = await _context.Tags.ToListAsync();
            return Ok(tags);
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> CreateTag([FromBody] Tag newTag)
        {
            if (newTag == null || string.IsNullOrWhiteSpace(newTag.TagName))
            {
                return BadRequest("Invalid tag data.");
            }

            _context.Tags.Add(newTag);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTags), new { id = newTag.TagID }, newTag);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateTag(int id, [FromBody] Tag updatedTag)
        {
            if (id != updatedTag.TagID)
            {
                return BadRequest("Tag ID mismatch.");
            }

            var tag = await _context.Tags.FindAsync(id);
            if (tag == null)
            {
                return NotFound();
            }

            tag.TagName = updatedTag.TagName;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Tags.Any(e => e.TagID == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> DeleteTag(int id)
        {
            var tag = await _context.Tags.FindAsync(id);
            if (tag == null)
            {
                return NotFound();
            }

            _context.Tags.Remove(tag);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
