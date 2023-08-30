import angular from 'angular';
import '@uirouter/angularjs';

import { HomeComponent } from './home.component';

angular
  .module('app', ['ui.router'])
  .component('home', HomeComponent)
  .config(['$stateProvider', '$locationProvider', ($stateProvider, $locationProvider) => {
    $stateProvider
      .state('home', {
        url: "/",
        component: "home",
      });

    $locationProvider.html5Mode(true);
  }]);

angular.element(document).ready(() => {
  angular.bootstrap(document, ['app'], { strictDi: false });
});


