import template from './user-details-form.component.html';
import './user-details-form.component.css'
import userTypes from '../../userTypes';

class UserDetailsFormController {
  constructor($stateParams, UserService) {
    'ngInject'

    this._$stateParams = $stateParams;
    this._userService = UserService;
  }

  $onInit() {
    this.userTypes = userTypes;
    this.userForm = Object.assign({}, this.user)
  }

  delete() {
    this._userService.deleteUser(this.user.id);
  }

  update() {
    this._userService.updateUser(Object.assign({}, this.userForm));
  }
}

export const UserDetailsFormComponent = {
  template,
  controller: UserDetailsFormController,
  bindings: {
    user: '<'
  }
};
