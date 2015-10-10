app.controller("myController", ["$scope", "httpFactory", "$timeout", function($scope, httpFactory, $timeout){

//--HEADER SECTION--\\
  $scope.searchIcon = "../images/search_icon.png";
  $scope.logo = "job pocket";
  $scope.menuIcon = "../images/nav_bar_icon.png";
//--END HEADER SECTION--\\

//--FOOTER SECTION--\\
  $scope.contact = "contact";
//--END FOOTER SECTION--\\

//--MAIN BODY/ MY LIST--\\
 $scope.headLine = "Wanted UX/UI Designer";
 $scope.fillerText = "Title Amadeus Consulting is a technology consulting company located in the heart of Boulder, CO. We are looking for dynamic developers to join our fast growing team! Benefits of Amadeus Consulting: A great learning opportunity with a supportive and collaborative team environment A chance to develop cutting edge technology in dynamic project ...";
//--END MAIN BODY/ MY LIST--\\

}]);


//ng-controller='jobController' on search url table in html
app.controller("jobController", function($scope, httpFactory, $timeout){
  //ng-model='url' on input in html
  $scope.url= "";
  //
  $scope.allUrls = [];
  //ng-click='getUrl' on button
  $scope.getUrl= function () {
    //single job
    console.log($scope.url);
    $scope.allUrls.push($scope.url);
    //all jobs
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
          $location.path('/');
          $scope.disabled = false;
          $scope.loginForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Invalid username and/or password";
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
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.registerForm = {};
        });

    };

}]);


app.controller("listController", ["$scope", "httpFactory", "$timeout", function($scope, httpFactory, $timeout){
// $scope.messageSection = false;
  // $scope.jobdescription = {};

  // var jobUrl = "";
  // var jobsUrl = "/list";

  // getjobs = function(url){
  //   httpFactory.get(url)
  //   .then(function(response){
  //     $scope.jobs = response.data;
  //   });
  // };

  // function showMessage(messageString) {
  //   getjobs(jobsUrl);
  //   $scope.messageSection = true;
  //   $scope.message = messageString;
  //   $timeout(function() {
  //     $scope.messageSection = false;
  //   }, 5000);
  // }

  // getjobs(jobsUrl);

  // $scope.postjob = function(){
  //   var payload = $scope.job;
  //   httpFactory.post(jobsUrl, payload);
  //   $scope.job = {};
  //   showMessage("Job Successfully Added!");
  // };

  // $scope.editjob = function(id){
  //   jobUrl = "/api/v1/job/" + id;
  //   httpFactory.get(jobUrl).then(function(response) {
  //     $scope.job = response.data;
  //   });
  //   $scope.edit = true;
  // };

  // $scope.updatejob = function() {
  //   var payload = $scope.job;
  //   httpFactory.put(jobUrl, payload);
  //   $scope.edit = false;
  //   $scope.job = {};
  //   showMessage("job Successfully Updated!");
  // };

  // $scope.deletejob = function(id) {
  //   jobUrl = "/api/v1/job/" + id;
  //   httpFactory.delete(jobUrl);
  //   showMessage("job Successfully Deleted!");
  // };
}]);
