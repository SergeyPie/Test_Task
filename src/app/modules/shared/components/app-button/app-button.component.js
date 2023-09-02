
import template from './app-button.component.html';
import './app-button.component.css';

export const AppButtonComponent = {
  template,
  transclude: true,
  bindings: {
    type: '<',
    color: '<',
    disabled: '<'
  }
};
