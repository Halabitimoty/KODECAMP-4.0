import { BorrowingManagement } from "./Library/BorrowingManagement";
import { UserManagement } from "./Library/UserManagement";

const User = new UserManagement();
const Book = new BorrowingManagement();

User.addUser({ id: "001", name: "Alabi Timothy" });
User.addUser({ id: "002", name: "Christopher Sesugh" });
User.addUser({ id: "003", name: "James Cater" });
User.addUser({ id: "004", name: "Jackie Chan" });

console.log("List of Users in the Database : ", User.getUsers());

Book.addBook({
  id: "A-978-006",
  title: "The Alchemist",
  author: "Paulo Coelho",
  isbn: "A-978-006",
  isAvailable: true,
});
Book.addBook({
  id: "B-978-007",
  title: "The Blchemist",
  author: "Raulo Coelho",
  isbn: "B-978-007",
  isAvailable: true,
});
Book.addBook({
  id: "C-978-008",
  title: "The Clchemist",
  author: "Yaulo Coelho",
  isbn: "C-978-008",
  isAvailable: false,
});
Book.addBook({
  id: "D-978-009",
  title: "The Dlchemist",
  author: "Jaulo Coelho",
  isbn: "D-978-009",
  isAvailable: true,
});
Book.addBook({
  id: "E-978-010",
  title: "The Elchemist",
  author: "Oaulo Coelho",
  isbn: "E-978-010",
  isAvailable: false,
});

console.log("List of Books in the Database : ", Book.getBooks());

Book.removeBook("E-978-010");

console.log("List of Books in the Database : ", Book.getBooks());

console.log("Search for Book :", Book.searchBook({ title: "The Alchemist" }));
console.log("Search for Book :", Book.searchBook({ title: "The Glchemist" }));
console.log("Search for Book :", Book.searchBook({ isbn: "B-978-007" }));
console.log("Search for Book :", Book.searchBook({ isbn: "F-978-007" }));

User.removeUser("004");

console.log("List of Users in the Database : ", User.getUsers());

console.log("Search for User : ", User.searchUser({ id: "001" }));
console.log("Search for User : ", User.searchUser({ id: "008" }));

console.log(Book.borrowBook({ userId: "A-978-006", bookIsbn: "A-978-006" }));
console.log("List of Books in the Database : ", Book.getBooks());
console.log(Book.borrowBook({ userId: "C-978-008", bookIsbn: "C-978-008" }));
console.log("List of Books in the Database : ", Book.getBooks());

console.log("List of Borrowed Books : ", Book.getBorrowedBookList());

console.log("Return Book : ", Book.returnBook("001", "A-978-006"));

console.log("List of Borrowed Books : ", Book.getBorrowedBookList());
console.log("List of Books in the Database : ", Book.getBooks());

console.log("Check if Book is Available : ", Book.isBookAvailable("A-978-006"));
console.log("Check if Book is Available : ", Book.isBookAvailable("C-978-008"));
