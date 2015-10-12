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

// function listsController($scope) {

//     $scope.refresh = function(){
//         alert('toto');
//     };

// }
