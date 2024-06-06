export class UserManagement {
  /**
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
   *
   * @param {string} id
   * @param {string} name
   */
  addUser(id, name) {
    this.users.push({ id, name });
  }

  /**
   *
   * @param {string} userId
   */
  removeUser(userId) {
    this.users = this.users.filter((u) => u.id !== userId);
  }

  /**
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
   *
   * @returns {Array} users
   */
  getUsers() {
    return this.users;
  }
}
