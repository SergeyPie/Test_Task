import template from './user-list.component.html';
import './user-list.component.css'

class UserListController {
  constructor($state) {
    'ngInject'

    this._$state = $state;
  }

  $onInit() {
    this.tableColumns = [
      { label: "Username", field: "username" },
      { label: "First Name", field: "first_name" },
      { label: "Last Name", field: "last_name" },
      { label: "Email", field: "email" },
      { label: "Type", field: "user_type" }
    ];
  }

  handleSelectedItem(item) {
    this._$state.go('users.edit', { userId: item.id })
  }
}

export const UserListComponent = {
  template,
  controller: UserListController,
  bindings: {
    users: '<'
  }
};
