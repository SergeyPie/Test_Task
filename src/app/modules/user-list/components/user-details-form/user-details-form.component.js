import template from './user-details-form.component.html';
import './user-details-form.component.css'
import userTypes from '../../userTypes';

class UserDetailsFormController {
  constructor(UserService, $state, NotificationService,$scope) {
    'ngInject'

    this._userService = UserService;
    this._notificationService = NotificationService;
    this._$scope = $scope;
    this._$state = $state;
  }

  $onInit() {
    this.userTypes = userTypes;
    this.userForm = Object.assign({}, this.user)
  }

  delete() {
    this._userService.deleteUser(this.user.id);
    this._$state.go('users');
  }

  update() {
    this.isLoading = true
    this._userService.updateUser(Object.assign({}, this.userForm))
      .then(() => {
        this.isLoading = false;
        this._$scope.$apply(() => this._notificationService.add('success', 'Successfully updated!'))
        this._$state.go('users');
      })
      .catch((error) => {
        this.isLoading = false;
        this._$scope.$apply(() => this._notificationService.add('error', error))
      })
  }
}

export const UserDetailsFormComponent = {
  template,
  controller: UserDetailsFormController,
  bindings: {
    user: '<'
  }
};
