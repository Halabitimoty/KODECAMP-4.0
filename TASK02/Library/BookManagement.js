export class BookManagement {
  constructor() {
    this.title = "";
    this.author = "";
    this.isbn = "";
    this.isAvailable = "";
    this.books = [];
  }

  /**
   *
   * @param {string} title
   * @param {string} author
   * @param {string} isbn
   * @param {boolean} isAvailable
   */
  addBook(title, author, isbn, isAvailable) {
    this.books.push({ title, author, isbn, isAvailable });
  }

  /**
   *
   * @param {string} bookIsbn
   */
  removeBook(bookIsbn) {
    this.books = this.books.filter((b) => b.isbn !== bookIsbn);
  }

  /**
   *
   * @param {object} query
   * @returns {Array} books
   */
  searchBook(query) {
    const details = this.books.filter((book) => {
      return (
        (!query.title ||
          book.title.toLowerCase().includes(query.title.toLowerCase())) &&
        (!query.author ||
          book.author.toLowerCase().includes(query.author.toLowerCase())) &&
        (!query.isbn || book.isbn === query.isbn)
      );
    });

    if (details.length === 0) {
      return "Book not found";
    }

    return details;
  }

  /**
   *
   * @param {object} query
   * @param {boolean} update
   */
  updateBook(query, update) {
    this.books = this.books.map((book) => {
      if (book.isbn === query.isbn) {
        return { ...book, ...update };
      }
      return book;
    });
  }

  isBookAvailable(bookIsbn) {
    const check = this.books.filter((b) => b.isbn === bookIsbn);
    if (check[0].isAvailable) {
      return "Book is available";
    }
    return "Book is not available";
  }

  /**
   *
   * @returns {Array} books
   */
  getBooks() {
    return this.books;
  }
}
