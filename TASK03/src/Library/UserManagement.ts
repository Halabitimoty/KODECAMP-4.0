export class UserManagement {
  private id: string;
  private name: string;
  private users: UserTypes[];

  constructor(id = "", name = "", users = []) {
    this.id = id;
    this.name = name;
    this.users = users;
  }

  /**
   * This method adds a user to the library
   *
   * @param id - User ID
   * @param name - User Name
   * @returns - void
   */
  public addUser({ id, name }: UserTypes): void {
    this.users.push({ id, name });
  }

  /**
   * This method removes a user from the library
   *
   * @param userId - User ID
   * @returns - void
   */
  public removeUser(userId: string): void {
    this.users = this.users.filter((u) => u.id !== userId);
  }

  /**
   * This method searches for a user in the library
   *
   * @param id - User ID
   * @param name - User Name
   * @returns  - User details | string
   */
  public searchUser({ id, name }: Partial<UserTypes>): UserTypes[] | string {
    const userdetails = this.users.filter((user) => {
      return (
        (!id || user.id.toLowerCase().includes(id.toLowerCase())) &&
        (!name || user.name.toLowerCase().includes(name.toLowerCase()))
      );
    });

    if (userdetails.length === 0) {
      return "Book not found";
    }

    return userdetails;
  }

  /**
   * This method returns all users in the library
   *
   * @returns - Array of users
   */
  getUsers() {
    return this.users;
  }
}
