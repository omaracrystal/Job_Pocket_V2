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
 $scope.fillerText = "This is dummy text for now... the link above will take you to the url you just added. Are you a User Experience/Visual Designer with strong interests and capabilities in the design and development of engaging user experiences? Then Innovar Group would like to speak with you. Please send your resume to...";
 $scope.urlImage = "../images/job_1.png";
//--END MAIN BODY/ MY LIST--\\

  $scope.loadfeed = function (file) {
    var maxEntries = 50;
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D%22"+encodeURIComponent(file)+"%22&format=json&callback=?", function(d) {
    var count = 0;
    //grab ever rss item from the json result request
    $(d.query.results.RDF.item).each(function() {
    //if set up to be infinite or the limit is not reached, keep grabbing items
    if(maxEntries === 0 || maxEntries>count){
      var title = this.title[1];
      var link = this.link;
      var description = this.description;
      var pubDate = this.date;
      // Format however you want, I only went for link and title
      var anItem = "<table style='width:100%'><tr><td style='width:65%'><p><h3><a href="+link+" target='_blank'>"+title+"</a></h3>"+pubDate+"</p>"+description+"</td></tr></table>";
      //append to the div
      $("#content").append(anItem);
      count++;
      }
   });
  });
  };

}]);



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

