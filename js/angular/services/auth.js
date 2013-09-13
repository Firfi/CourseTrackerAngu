app.factory('Auth', function($http, $rootScope, $cookieStore) {

  var currentUser = $cookieStore.get('user');

  return {
    user: currentUser,
    isLoggedIn: function(user) {
      if(user === undefined)
        user = $cookieStore.get('user');
      console.warn(user)
      return !!user && !!user.login;
    },
    login: function(user, success, error) {
      if (user.login === 'login' && user.password === 'password') {
        $rootScope.user = user;
        $rootScope.loginError = '';
        $cookieStore.put('user', user);
        success();
      } else {
        $rootScope.loginError = 'Invalid login/password. Hint: login/password.'
      }
//      $http.post('/login', user).success(function(user){
//        $rootScope.user = user;
//        success(user);
//      }).error(error);
    },
    logout: function(success, error) {
      $rootScope.user = null;
      $cookieStore.remove('user');
//      $http.post('/logout').success(function(){
//        $rootScope.user = {
//          username: ''
//        };
//        success();
//      }).error(error);
    }
  }
});