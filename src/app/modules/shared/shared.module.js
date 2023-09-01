import * as angular from 'angular';
import { AppTableComponent, AppFormFieldComponent, AppSelectorComponent } from './components';
import { FormFieldValidationDirective } from './directives/form-field-validation.directive';

export const SharedModule = angular.module('app.shared', [])
  .component('appTable', AppTableComponent)
  .component('appFormField', AppFormFieldComponent)
  .component('appSelector', AppSelectorComponent)
  .directive('formFieldValidation', FormFieldValidationDirective)
