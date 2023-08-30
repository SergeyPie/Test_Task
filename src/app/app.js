import angular from 'angular';
import '../assets/style.css';
import '@uirouter/angularjs';

import { HomeComponent } from './home.component';
import { AppRoutes } from './routes/routes';
import { UserListModule } from './modules/user-list/user-list.module';
import { SharedModule } from './modules/shared/shared.module';
angular
  .module('app', [
    'ui.router', 
    UserListModule.name,
    SharedModule.name])
  .component('home', HomeComponent)
  .config(AppRoutes)
  .config(['$locationProvider', ($locationProvider) => {
    $locationProvider.html5Mode(true);
  }]);

angular.element(document).ready(() => {
  angular.bootstrap(document, ['app'], { strictDi: false });
});


