import { BookManagement } from "./BookManagement.js";

/**
 * @class
 * @classdesc BorrowingManagement class
 * @extends BookManagement
 */

export class BorrowingManagement extends BookManagement {
  constructor() {
    super();
    this.userId = "";
    this.borrowingList = [];
  }

  /**
   *
   * @param {string} userId
   * @param {string} bookIsbn
   * @param {boolean} check
   * @returns
   */

  borrowBook(userId, bookIsbn) {
    const check = this.searchBook({ isbn: bookIsbn });

    if (check[0].isAvailable) {
      this.borrowingList.push({ userId, bookIsbn });
      this.updateBook(check[0], { isAvailable: false });
      return { "You have borrowed the book successfully": check };
    } else {
      return "Book is not available";
    }
  }

  /**
   *
   * @param {string} bookIsbn
   * @returns {boolean} books
   */
  chackBookAvailability(bookIsbn) {
    return this.borrowingList.map((b) => b.bookIsbn !== bookIsbn);
  }

  /**
   *
   * @param {string} userId
   * @param {string} bookIsbn
   */
  returnBook(userId, bookIsbn) {
    const check = this.searchBook({ id: userId, isbn: bookIsbn });

    this.borrowingList = this.borrowingList.filter(
      (b) => b.bookIsbn !== bookIsbn
    );

    if (!check[0].isAvailable) {
      this.updateBook(check[0], { isAvailable: true });
      return { "You have returned the book successfully": check };
    } else {
      return "Unable to return book, book is not borrowed";
    }
  }

  /**
   *
   * @returns {Array} borrowed books
   */
  getBorrowedBookList() {
    return this.borrowingList;
  }
}
