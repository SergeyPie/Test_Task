export const AppRoutes = ($stateProvider) => {
  'ngInject';

  return $stateProvider
    .state('users', {
      url: '/',
      views: {
        'content': 'userList',
        'aside': '',
      }
    })
    .state('create', {
      url: '/create',
      views: {
        'content': 'userList',
        'aside': 'userForm',
      }
    })
    .state('edit', {
      url: '/:userId/edit',
      views: {
        'content': 'userList',
        'aside': 'userDetailsForm',
      },
      resolve: {
        userItem: function($stateParams) {
        console.log("🚀 ~ AppRoutes ~ $stateParams:", $stateParams)

          return [];
        }
      }
    })
};

