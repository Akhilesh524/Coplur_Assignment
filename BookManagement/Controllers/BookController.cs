using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
         BookServices.BookService _bookservices;
     
        public BookController(BookServices.BookService bookservice)
        {
            _bookservices = bookservice;
        }
        [HttpGet]
        [Route("allBook")]

        public IActionResult GetAllBook(int id)
        {
            var response = _bookservices.GetAllBook(id);
            return Ok();
        }

        [HttpPost]
        [Route("addBook")]
        public IActionResult addBook([FromBody] Book book)
        {
            return Ok();
        }
        [HttpPut]
        [Route("updateBook")]
       public IActionResult UpadateBook([FromBody] Book book)
        {
            var response = _bookservices.UpdateBook(book.id, book.bookTitle, book.bookAuthor, book.yearOfpublication);
            return Ok(response);
        }

    }
}

public class Book { 
    public int id { get; set; }
    public string bookTitle { get; set; }
    public string bookAuthor { get; set; }
    public string yearOfpublication { get; set; }
}

