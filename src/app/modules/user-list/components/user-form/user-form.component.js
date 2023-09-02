import template from './user-form.component.html';
import './user-form.component.css'
import userTypes from '../../userTypes';

class UserFormController {
  constructor(UserService, $state, NotificationService,$scope) {
    'ngInject'

    this._userService = UserService;
    this._notificationService = NotificationService;
    this._$scope = $scope;
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
      repeat_password: '',
      user_type: 'Admin'
    };
  }

  save() {
    this.isLoading = true
    this._userService.createUser(Object.assign({ id: Date.now().toString() }, this.userForm))
      .then(() => {
        this.isLoading = false;
        this._$scope.$apply(() => this._notificationService.add('success', 'Success. User Created!'))
        this._$state.go('users');
      })
      .catch((error) => {
        this.isLoading = false;
        this._$scope.$apply(() => this._notificationService.add('error', error))
      })
  }
}

export const UserFormComponent = {
  template,
  controller: UserFormController
};
