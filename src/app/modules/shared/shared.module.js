import * as angular from 'angular';
import { AppTableComponent } from './components';

export const SharedModule = angular.module('app.shared', [])
  .component('appTable', AppTableComponent)