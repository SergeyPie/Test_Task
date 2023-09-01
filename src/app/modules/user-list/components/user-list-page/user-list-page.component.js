import template from './user-list-page.component.html';
import './user-list-page.component.css'

class UserListPageController {
  constructor($state) {
    'ngInject'

    this._$state = $state;
  }

  $onInit() {

  }

  cre(item) {
    this._$state.go('edit', { userId: item.id })
  }
}

export const UserListPageComponent = {
  template,
  controller: UserListPageController
};
