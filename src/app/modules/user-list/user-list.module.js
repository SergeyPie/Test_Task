import * as angular from 'angular';
import { UserListComponent } from './user-list/user-list.component';

export const UserListModule = angular.module('app.userList', [])
  .component('userList', UserListComponent);