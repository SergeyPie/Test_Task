import template from './user-form.component.html';
import './user-form.component.css'
import userTypes from '../../userTypes';

class UserFormController {
  constructor(UserService,$state) {
    'ngInject'

    this._userService = UserService;
    this._$state = $state;
  }

  $onInit() {
    this.userTypes = userTypes;

    this.userForm = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      user_type: 'Admin'
    };
  }

  save() {
    this._userService.createUser(Object.assign({id: Date.now().toString()}, this.userForm));
    this._$state.go('users')
  }
}

export const UserFormComponent = {
  template,
  controller: UserFormController
};
