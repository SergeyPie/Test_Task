import angular from 'angular';
import '../assets/style.css';
import '@uirouter/angularjs';

import { AppRoutes } from './routes/routes';
import { UserListModule } from './modules/user-list/user-list.module';
import { UserService } from './modules/user-list/services/user.service';
angular
  .module('app', [
    'ui.router',
    UserListModule.name])
  .service("UserService", UserService)
  .config(AppRoutes)
  .config(['$locationProvider', '$urlRouterProvider', ($locationProvider, $urlRouterProvider) => {
    $urlRouterProvider
      .when('/404', '/404')
      .when('/403', '/403')
      .otherwise('/404');

    $locationProvider.html5Mode(true);
  }]);

angular.element(document).ready(() => {
  angular.bootstrap(document, ['app'], { strictDi: false });
});


