var app = angular.module('CourseTracker', ['ngCookies'])
  .config(function ($routeProvider) {

    $routeProvider.when('/course/:param1',
    {
        templateUrl: 'js/angular/views/qr.htm',
        controller: 'CourseController'
    });

    $routeProvider.when('/Course/:param1',
    {
        templateUrl: 'js/angular/views/qr.htm',
        controller: 'CourseController'
    });

    $routeProvider.when('/',
    {
        templateUrl: 'js/angular/views/blank.htm',
        controller: 'DefaultController'
    });

    $routeProvider.otherwise({ redirectTo: '/' });
  }).run(function($rootScope, Auth, $location) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      if (!Auth.isLoggedIn()) {
        $location.path('/');
      }
    });
  });