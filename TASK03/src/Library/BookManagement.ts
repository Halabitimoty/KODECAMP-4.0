export class BookManagement {
  private title: string;
  private author: string;
  private isbn: string;
  private isAvailable: boolean;
  private books: BookTypes[];

  constructor(
    title = "",
    author = "",
    isbn = "",
    isAvailable = false,
    books = []
  ) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = isAvailable;
    this.books = books;
  }
  /**
   * This method adds a book to the library
   *
   * @param title - Book title
   * @param author - Book author
   * @param isbn - Book ISBN
   *
   * @returns - void
   */
  public addBook({ id, title, author, isbn, isAvailable }: BookTypes): void {
    this.books.push({
      id,
      title,
      author,
      isbn,
      isAvailable,
    });
  }

  /**
   * This method removes a book from the library
   *
   * @param isbn - Book ISBN
   *
   * @returns - void
   */
  public removeBook(isbn: string): void {
    this.books = this.books.filter((book) => book.isbn !== isbn);
  }

  /**
   * This method searches for a book in the library
   *
   * @param query -  Object with the search query
   * @returns - Object ofBook details | string
   */
  public searchBook({
    title,
    author,
    isbn,
  }: Partial<BookTypes>): BookTypes[] | string {
    const bookdetails = this.books.filter((book) => {
      return (
        (!title || book.title.toLowerCase().includes(title.toLowerCase())) &&
        (!author || book.author.toLowerCase().includes(author.toLowerCase())) &&
        (!isbn || book.isbn === isbn)
      );
    });

    if (bookdetails.length === 0) {
      return "Book not found";
    }

    return bookdetails;
  }

  /**
   * This method updates a book in the library
   *
   * @param query - Object with the search query
   * @param update - boolean value to update the book
   */
  public updateBook(query: BookTypes, update: boolean) {
    this.books = this.books.map((book) => {
      if (book.isbn === query.isbn) {
        return { ...book, update };
      }
      return book;
    });
  }

  /**
   * This method checks if a book is available in the library
   *
   * @param bookIsbn - Book ISBN
   * @returns - string
   */
  public isBookAvailable(bookIsbn: string): string {
    const check = this.books.filter((b) => b.isbn === bookIsbn);
    if (check[0].isAvailable) {
      return "Book is available";
    }
    return "Book is not available";
  }

  /**
   * This method returns all the books in the library
   *
   * @returns - Array of Books
   */
  public getBooks(): BookTypes[] {
    return this.books;
  }
}
