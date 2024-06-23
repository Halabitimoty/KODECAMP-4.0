"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagement = void 0;
class UserManagement {
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
    addUser({ id, name }) {
        this.users.push({ id, name });
    }
    /**
     * This method removes a user from the library
     *
     * @param userId - User ID
     * @returns - void
     */
    removeUser(userId) {
        this.users = this.users.filter((u) => u.id !== userId);
    }
    /**
     * This method searches for a user in the library
     *
     * @param id - User ID
     * @param name - User Name
     * @returns  - User details | string
     */
    searchUser({ id, name }) {
        const userdetails = this.users.filter((user) => {
            return ((!id || user.id.toLowerCase().includes(id.toLowerCase())) &&
                (!name || user.name.toLowerCase().includes(name.toLowerCase())));
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
exports.UserManagement = UserManagement;
