var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    //login page
      .when('/', {
        templateUrl: '../partials/login.html',
        controller: 'loginController',
        // access: {restricted: false}
      })
      //login successful
      .when('/list', {
        templateUrl: '../partials/myList.html',
        controller: 'myController',
        // access: {restricted: true}
      })
      .when('/logout', {
        controller: 'logoutController',
        // access: {restricted: true}
      })
      .when('/register', {
        templateUrl: '../partials/register.html',
        controller: 'registerController',
        // access: {restricted: false}
      })
      .when('/recommended', {
        templateUrl: '../partials/recommended.html',
        controller: 'myController',
        // access: {restricted: true}
      })
      .when('/search', {
        templateUrl: '../partials/searchOptions.html',
        controller: 'myController',
        // access: {restricted: true}
      })
    //login page
      .otherwise({
        redirectTo: '/',
        // access: {restricted: false}
      });
});

// app.run(function ($rootScope, $location, $route, AuthService) {
//   $rootScope.$on('$routeChangeStart', function (event, next, current) {
//     if (next.access.restricted && AuthService.isLoggedIn() === false) {
//       $location.path('/login');
//     }
//   });
// });

// app.config(function($routeProvider) {
//     $routeProvider
//       .when('/login', {
//         templateUrl: '../partials/myList.html',
//         controller: 'myController'
//       })
//       .when('/recommended', {
//         templateUrl: '../partials/recommended.html',
//         controller: 'myController'
//       })
//       .when('/search', {
//         templateUrl: '../partials/searchOptions.html',
//         controller: 'myController'
//       });
// });
