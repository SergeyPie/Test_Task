import template from './user-details-form.component.html';
import './user-details-form.component.css'

class UserDetailsFormController {
  constructor($stateParams) {
    'ngInject'

    this._$stateParams = $stateParams;
  }

  $onInit() {
    console.log(this._$stateParams)
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
      username: 'testusername',
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@mail.com',
      password: 'test12334',
      user_type: 'Admin'
    }
  }
}

export const UserDetailsFormComponent = {
  template,
  controller: UserDetailsFormController
};
