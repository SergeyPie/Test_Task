import template from './user-list.component.html';
import './user-list.component.css'
import { users } from '../../../../assets/mock-data'

class UserListController {
    constructor() {
        'ngInject'
    }


    $onInit() {
        this.tableData = users;

        this.tableColumns = [
            { label: "Username", field: "username" },
            { label: "First Name", field: "firstName" },
            { label: "Last Name", field: "lastName" },
            { label: "Email", field: "email" },
            { label: "Type", field: "type" }
        ];

        console.log("🚀 ~ UserListItemController ~ $onInit ~ this.tableData:", this.tableData)

    }
}

export const UserListComponent = {
    template,
    controller: UserListController
};