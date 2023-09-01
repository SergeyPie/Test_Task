import template from './app-form-field.component.html';
import './app-form-field.component.css';

export const AppFormFieldComponent = {
  template,
  bindings: {
    label: '<',
    type: '<',
    form: '<',
    name: '<',
    value: '='
  }
};
