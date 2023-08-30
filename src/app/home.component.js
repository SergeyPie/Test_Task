import template from './home.component.html';
import './home.component.css'

class HomeController {
    constructor($element) {
        'ngInject'

        this.$element = $element;
    }

    $onInit() {
        console.log("ONINIT====",this.$element)
    }
}

export const HomeComponent = {
    template,
    controller: HomeController
};