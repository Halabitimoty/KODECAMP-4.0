export class UserManagement {
  /**
   * Object Contructor
   *
   * @param {string} id
   * @param {string} name
   */
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.users = [];
  }

  /**
   * add user to the database
   *
   * @param {string} id
   * @param {string} name
   */
  addUser(id, name) {
    this.users.push({ id, name });
  }

  /**
   * remove a user from database
   *
   * @param {string} userId
   */
  removeUser(userId) {
    this.users = this.users.filter((u) => u.id !== userId);
  }

  /**
   * search for a user in the database
   *
   * @param {string} query
   * @returns  {Array} users
   */
  searchUser(query) {
    const details = this.users.filter((user) => {
      return (
        (!query.id || user.id.toLowerCase().includes(query.id.toLowerCase())) &&
        (!query.name ||
          user.name.toLowerCase().includes(query.name.toLowerCase()))
      );
    });

    if (details.length === 0) {
      return "User not found";
    }

    return details;
  }

  /**
   *  Get a list of all users
   *
   * @returns {Array} users
   */
  getUsers() {
    return this.users;
  }
}
