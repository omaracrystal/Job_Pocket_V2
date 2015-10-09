var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    //login page
      .when('/', {
        templateUrl: '../views/login.html',
        controller: 'myController'
      })
      //login successful
      .when('/list', {
        templateUrl: '../views/myList.html',
        controller: 'myController'
      })
      .when('/logout', {
        // templateUrl: '../views/myList.html',
        controller: 'logoutController'
      })
      .when('/register', {
        templateUrl: '../views/register.html',
        controller: 'registerController'
      })
      .when('/recommended', {
        templateUrl: '../views/recommended.html',
        controller: 'myController'
      })
      .when('/search', {
        templateUrl: '../views/searchOptions.html',
        controller: 'myController'
      })
    //login page
      .otherwise({redirectTo: '/'});
});

// app.config(function($routeProvider) {
//     $routeProvider
//       .when('/login', {
//         templateUrl: '../views/myList.html',
//         controller: 'myController'
//       })
//       .when('/recommended', {
//         templateUrl: '../views/recommended.html',
//         controller: 'myController'
//       })
//       .when('/search', {
//         templateUrl: '../views/searchOptions.html',
//         controller: 'myController'
//       });
// });
