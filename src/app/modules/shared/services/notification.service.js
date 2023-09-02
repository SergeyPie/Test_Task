/* @ngInject */
export function NotificationService($rootScope, $timeout) {
  $rootScope.notifications = [];

  return {
    add: function (type, message) {
      this.clear()
      $rootScope.notifications.push({ type, message });
      $timeout(() => this.clear(), 2000);
    },
    clear: function () {
      $rootScope.notifications = [];
    }
  };
}
