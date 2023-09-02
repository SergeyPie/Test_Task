export class UserService {
  constructor($http) {
    'ngInject'

    this._$http = $http;
    this.users = [];
  }

  getUsers() {
    if (this.users.length) return Promise.resolve(this.users);

    return this._$http.get('users.json')
      .then(({ data }) => {
        this.users = data;
        return this.users;
      });
  };

  getUserById(userId) {
    return this.getUsers()
      .then((users) => users.find((user) => user.id === userId));
  };

  async createUser(newUser) {
    const promiseA = this._emulateServerErrors(newUser);

    return promiseA.then(() => this.users.push(newUser))
  };

  deleteUser(userId) {
    const indexToRemove = this.users.findIndex(user => user.id === userId);

    if (indexToRemove !== -1) {
      this.users.splice(indexToRemove, 1);
    }
  };

  async updateUser(updatedUser) {
    const promiseA = this._emulateServerErrors(updatedUser);

    return promiseA.then(() => {
      const index = this.users.findIndex(user => user.id === updatedUser.id);
      this.users[index] = updatedUser;
    });
  }

  _emulateServerErrors(newUser) {
    return new Promise((resolve, reject) => {

      const isDuplicateUsername = this.users.find((user) => (user.username === newUser.username) && (user.id !== newUser.id));
      const isDuplicateEmail = this.users.find((user) => (user.email === newUser.email) && (user.id !== newUser.id));

      if (isDuplicateUsername) {
        return setTimeout(() => reject(new Error("Username already exists")), 1000);
      }

      if (isDuplicateEmail) {
        return setTimeout(() => reject(new Error("Email already exists")), 1000);
      }

      if (newUser.password !== newUser.repeat_password) {
        return setTimeout(() => reject(new Error("Passwords are different")), 1000);
      }

      setTimeout(() => resolve(), 1000);
    });
  }
}
