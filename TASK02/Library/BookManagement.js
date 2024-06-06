export class BookManagement {
  constructor() {
    this.title = "";
    this.author = "";
    this.isbn = "";
    this.isAvailable = "";
    this.books = [];
  }

  /**
   * add a Book
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
   * remove a Book
   *
   * @param {string} bookIsbn
   */
  removeBook(bookIsbn) {
    this.books = this.books.filter((b) => b.isbn !== bookIsbn);
  }

  /**
   * search for Book based on Query
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
   * update Book Based on Query
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

  /**
   *  check if Book is available
   *
   * @param {string} bookIsbn
   * @returns Text
   */
  isBookAvailable(bookIsbn) {
    const check = this.books.filter((b) => b.isbn === bookIsbn);
    if (check[0].isAvailable) {
      return "Book is available";
    }
    return "Book is not available";
  }

  /**
   * get all Books
   *
   * @returns {Array} books
   */
  getBooks() {
    return this.books;
  }
}
