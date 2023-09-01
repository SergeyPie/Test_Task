import template from './user-form.component.html';
import './user-form.component.css'

class UserFormController {
  constructor() {
    'ngInject'
  }

  $onInit() {

    this.userTypes = [
      {
        label: 'Administrator',
        value: 'Admin',
      },
      {
        label: 'Driver',
        value: 'Driver',
      }
    ]

    this.userForm = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      user_type: ''
    }
  }
}

export const UserFormComponent = {
  template,
  controller: UserFormController
};
