import * as angular from 'angular';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserDetailsFormComponent } from './components/user-details-form/user-details-form.component';
import { UserListPageComponent } from './components/user-list-page/user-list-page.component';

import { SharedModule } from '../shared/shared.module'

export const UserListModule = angular.module('app.userList', [SharedModule.name])
  .component('userList', UserListComponent)
  .component('userForm', UserFormComponent)
  .component('userDetailsForm', UserDetailsFormComponent)
  .component('userListPage', UserListPageComponent);
