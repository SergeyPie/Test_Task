import template from './user-list.component.html';
import './user-list.component.css'
import { users } from '../../../../../assets/mock-data'

class UserListController {
  constructor($state) {
    'ngInject'

    this._$state = $state;
  }

  $onInit() {
    this.tableData = users;

    this.tableColumns = [
      { label: "Username", field: "username" },
      { label: "First Name", field: "firstName" },
      { label: "Last Name", field: "lastName" },
      { label: "Email", field: "email" },
      { label: "Type", field: "type" }
    ];
  }

  handleSelectedItem(item) {
    this._$state.go('edit', { userId: item.id })
  }
}

export const UserListComponent = {
  template,
  controller: UserListController
};
