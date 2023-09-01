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

  createUser(user) {
    this.users.push(user);
  };

  deleteUser(userId) {
    const indexToRemove = this.users.findIndex(user => user.id === userId);

    if (indexToRemove !== -1) {
      this.users.splice(indexToRemove, 1);
    }
  };

  updateUser(updatedUser) {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    this.users[index] = updatedUser
  }
}
