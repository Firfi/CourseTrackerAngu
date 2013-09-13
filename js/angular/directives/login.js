app.directive('login', function(Auth, $rootScope, $timeout) {
  return {
    templateUrl: 'js/angular/views/login.html',
    link: function(scope, element, attrs) {

      scope.user = {};

      $rootScope.isLoggedIn = function() {
        return Auth.isLoggedIn();
      };

      var cl;

      scope.login = function() {
        Auth.login(scope.user, function() {
          cl.dialog('close');
        });
      };

      var showForm = function() {
        cl = $(element).find('.login').dialog({
          dialogClass: "no-close",
          height: 180
        });
      };

      scope.logout = function() {
        Auth.logout();
        console.warn(cl);
        cl.dialog('open');
        scope.user = {};
      };

      if (!Auth.isLoggedIn()) {
        showForm();
      }
    }
  }
});