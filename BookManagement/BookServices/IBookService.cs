using Microsoft.AspNetCore.Mvc.ViewFeatures;

namespace BookManagement.BookServices
{
    public interface IBookService
    {
        public Book GetAllBook(int id);
        public Book UpdateBook(int id, string title, string author, string yearOfpublication);
      
    }
}
