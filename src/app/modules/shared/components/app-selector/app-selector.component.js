import template from './app-selector.component.html';
import './app-selector.component.css';

export const AppSelectorComponent = {
  template,
  bindings: {
    label: '<',
    items: '<',
    selected: '='
  }
};
