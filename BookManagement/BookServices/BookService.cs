namespace BookManagement.BookServices
{
    public class BookService : IBookService
    {
        List<Book> book = new List<Book>();
        public Book GetAllBook(int id)
        {
            Book book = new Book();
            //id
            //title
            //author
            //year of publication
            book.id = 1;
            book.bookTitle = "data structure";
            book.bookAuthor = "Yashvant Kanetkar";
            book.yearOfpublication = "2019";

            return book;
        }

        public Book UpdateBook(int id, string title,string author, string yearOfpublication)
        {
            Book book = new Book();
            book.id = id;
            book.bookTitle = title;
            book.bookAuthor = author;
            book.yearOfpublication = yearOfpublication;
            return book;
        }

      
    }
}
