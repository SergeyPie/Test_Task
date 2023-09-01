import template from './app-table.component.html';
import './app-table.component.css';

export const AppTableComponent = {
    template,
    bindings: {
        data: '<',
        columns: '<',
        onSelect: '&'
    }
};
