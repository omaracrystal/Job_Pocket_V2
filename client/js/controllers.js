app.controller("myController", ["$scope", "httpFactory", "$timeout", function($scope, httpFactory, $timeout){

//--HEADER SECTION--\\
  $scope.searchIcon = "../images/search_icon.png";
  $scope.logo = "job pocket";
  $scope.menuIcon = "../images/nav_bar_icon.png";
//--END HEADER SECTION--\\

//--FOOTER SECTION--\\
  // $scope.contact = "contact";
//--END FOOTER SECTION--\\

//--MAIN BODY/ MY LIST--\\
 $scope.headline = "UX/Visual Designer (Denver, Co)";
 $scope.fillerText = "Are you a User Experience/Visual Designer with strong interests and capabilities in the design and development of engaging user experiences? Do you thrive in an environment that requires strong problem solving skills and independent self-direction, coupled with an aptitude for team collaboration and open communication? Then Innovar Group would like to speak with you. Please send your resume to...";
 $scope.urlImage = "../images/job_1.png";
//--END MAIN BODY/ MY LIST--\\


}]);


// app.controller("recommendedController", ["$scope", "httpFactory", "$timeout", function($scope, httpFactory, $timeout){
//   console.log("working!!");
// }


//ng-controller='urlController' on search url table in html
app.controller("jobController", function($scope, httpFactory, $timeout){
  //ng-model='url' on input in html
  $scope.url= "";
  //
  $scope.allUrls = [];
  //ng-click='getUrl' on button
  $scope.getUrl= function () {
    //single url
    console.log($scope.url);
    $scope.allUrls.push($scope.url);
    //all urls
    console.log($scope.allUrls);
    $scope.url = "";
  };



});


app.controller('loginController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    // console.log(AuthService.getUserStatus());

    $scope.login = function () {
      // initial values
      $scope.error = false;
      $scope.disabled = true;
      // call login from service
      AuthService.login($scope.loginForm.username, $scope.loginForm.password)
        // handle success
        .then(function () {
          $location.path('/list');
          $scope.disabled = false;
          $scope.loginForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Invalid username and or password";
          $scope.disabled = false;
          $scope.loginForm = {};
        });

    };

}]);


app.controller('logoutController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.logout = function () {

      console.log(AuthService.getUserStatus());

      // call logout from service
      AuthService.logout()
        .then(function () {
          $location.path('/login');
        });
    };
}]);


app.controller('registerController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    console.log(AuthService.getUserStatus());

    $scope.register = function () {

      // initial values
      $scope.error = false;
      $scope.disabled = true;

      // call register from service
      AuthService.register($scope.registerForm.username, $scope.registerForm.password)
        // handle success
        .then(function () {
          $location.path('/login');
          $scope.disabled = false;
          $scope.registerForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Sorry! That user name is already being used";
          $scope.disabled = false;
          $scope.registerForm = {};
        });

    };

}]);


app.controller("urlController", ["$scope", "httpFactory", "$timeout", function($scope, httpFactory, $timeout){

  var url = "";
  var urls = "/urls";

  geturls = function(url){
    httpFactory.get(url)
    .then(function(response){
      $scope.url = response.data;
    });
  };

  function showMessage(messageString) {
    geturls(urls);
    $scope.messageSection = true;
    $scope.message = messageString;
    $timeout(function() {
      $scope.messageSection = false;
    }, 5000);
  }

  geturls(urls);

  $scope.posturl = function(){
    var payload = $scope.url;
    httpFactory.post(urls, payload);
    $scope.url = {};
    showMessage("Url Successfully Added!");
  };

  $scope.editurl = function(id){
    urlUrl = "/api/v1/url/" + id;
    httpFactory.get(url).then(function(response) {
      $scope.url = response.data;
    });
    $scope.edit = true;
  };

  $scope.updateurl = function() {
    var payload = $scope.url;
    httpFactory.put(urlUrl, payload);
    $scope.edit = false;
    $scope.url = {};
    showMessage("Url Successfully Updated!");
  };

  $scope.deleteurl = function(id) {
    urlUrl = "/api/v1/url/" + id;
    httpFactory.delete(url);
    showMessage("Url Successfully Deleted!");
  };
}]);

// app.controller("searchController", ["$scope", "httpFactory", "$timeout", function($scope, httpFactory, $timeout){

//   $scope.url = "";

// }]);

