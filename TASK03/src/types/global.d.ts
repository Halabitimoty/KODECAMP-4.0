interface BookTypes {
  id: string;
  title: string;
  author: string;
  isbn: string;
  isAvailable: boolean;
}

interface UserTypes {
  id: string;
  name: string;
}

interface BorrowList {
  userId: string;
  bookIsbn: string;
}
interface BorrowingList {
  list: BorrowList[];
}
