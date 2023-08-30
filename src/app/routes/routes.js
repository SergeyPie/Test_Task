export const AppRoutes = ($stateProvider) => {
    'ngInject';

    return $stateProvider
        .state('app', {
            url: '/',
            views: {
                'content': 'userList',
                'aside': 'home',
            }
        })
};

