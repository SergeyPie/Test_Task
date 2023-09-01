import * as angular from 'angular';
import { AppTableComponent, AppFormFieldComponent, AppSelectorComponent } from './components';

export const SharedModule = angular.module('app.shared', [])
  .component('appTable', AppTableComponent)
  .component('appFormField', AppFormFieldComponent)
  .component('appSelector', AppSelectorComponent)
