import { BorrowingManagement } from "./Library/BorrowingManagement.js";
import { UserManagement } from "./Library/UserManagement.js";

const User = new UserManagement();
const Book = new BorrowingManagement();

User.addUser("001", "Alabi Timothy");
User.addUser("002", "Christopher Sesugh");
User.addUser("003", "James Cater");
User.addUser("004", "Jackie Chan");

console.log("List of Users in the Database : ", User.getUsers());

Book.addBook("The Alchemist", "Paulo Coelho", "A-978-006", true);
Book.addBook("The Blchemist", "Raulo Coelho", "B-978-007", true);
Book.addBook("The Clchemist", "Yaulo Coelho", "C-978-008", false);
Book.addBook("The Dlchemist", "Jaulo Coelho", "D-978-009", true);
Book.addBook("The Elchemist", "Oaulo Coelho", "E-978-010", false);

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

console.log(Book.borrowBook("001", "A-978-006"));
console.log("List of Books in the Database : ", Book.getBooks());
console.log(Book.borrowBook("001", "C-978-008"));
console.log("List of Books in the Database : ", Book.getBooks());

console.log("List of Borrowed Books : ", Book.getBorrowedBookList());

console.log("Return Book : ", Book.returnBook("001", "A-978-006"));

console.log("List of Borrowed Books : ", Book.getBorrowedBookList());
console.log("List of Books in the Database : ", Book.getBooks());

console.log("Check if Book is Available : ", Book.isBookAvailable("A-978-006"));
console.log("Check if Book is Available : ", Book.isBookAvailable("C-978-008"));
