var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/login.html',
        controller: 'myController'
      })
      .when('/list', {
        templateUrl: '../views/myList.html',
        controller: 'myController'
      })
      .when('/recommended', {
        templateUrl: '../views/recommended.html',
        controller: 'myController'
      })
      .when('/search', {
        templateUrl: '../views/searchOptions.html',
        controller: 'myController'
      });
});

