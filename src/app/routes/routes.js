export const AppRoutes = ($stateProvider, $urlRouterProvider) => {
  'ngInject';


  return $stateProvider
    .state('app', {
      url: '/',
      redirectTo: 'users',
    })
    .state('users', {
      url: '/users/',
      component: 'userListPage',
      resolve: {
        users: (UserService) => {
          return UserService.getUsers();
        }
      }
    })
    .state('users.create', {
      url: 'create/',
      views: {
        'aside': 'userForm',
      }
    })
    .state('users.edit', {
      url: ':userId/edit/',
      views: {
        'aside': 'userDetailsForm',
      },
      resolve: {
        user: ($stateParams, UserService) => {
          return UserService.getUserById($stateParams.userId);
        }
      }
    })
    .state('error404', {
      url: '/404',
      template: '<h1>404 - Page not found</h1>'
    })
    .state('error403', {
      url: '/403',
      template: '<h1>403 - Access forbidden</h1>'
    });
};

