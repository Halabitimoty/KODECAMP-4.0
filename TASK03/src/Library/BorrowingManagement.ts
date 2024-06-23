import { BookManagement } from "./BookManagement";
/**
 * This class extends the BookManagement class
 *
 */
export class BorrowingManagement extends BookManagement {
  private userId: string;
  private borrowingList: BorrowList[];

  constructor(userId = "", borrowingList = []) {
    super();
    this.userId = userId;
    this.borrowingList = borrowingList;
  }

  /**
   * This method borrows a book from the library
   *
   * @param bookIsbn - Book ISBN
   * @param userId - User ID
   * @returns - string | object
   */
  public borrowBook({ bookIsbn, userId }: BorrowList): string | object {
    const check = this.searchBook({ isbn: bookIsbn });

    if (typeof check !== "string" && check.length > 0) {
      const book = check[0];
      if (book.isAvailable) {
        this.borrowingList.push({ userId, bookIsbn });
        this.updateBook(book, false);
        return { "You have borrowed the book successfully": book };
      } else {
        return "Book is not available";
      }
    } else {
      return "Book not found";
    }
  }

  /**
   * This method returns a book from the library
   *
   * @param bookIsbn - Book ISBN
   * @param userId - User ID
   * @returns - string | object
   */
  public returnBook(userId: string, bookIsbn: string): string | object {
    const check = this.searchBook({ id: userId, isbn: bookIsbn });

    this.borrowingList = this.borrowingList.filter(
      (b) => b.bookIsbn !== bookIsbn
    );

    if (typeof check !== "string" && check.length > 0) {
      const book = check[0];
      this.updateBook(book, true);
      return { "You have returned the book successfully": book };
    } else {
      return "Unable to return book, book is not borrowed";
    }
  }

  /**
   * This method gets the borrowed book list
   *
   * @returns - Borrowed book list
   */
  getBorrowedBookList() {
    return this.borrowingList;
  }
}
