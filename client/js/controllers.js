app.controller("myController", ["$scope", "httpFactory", "$timeout", function($scope, httpFactory, $timeout){

//--HEADER SECTION--\\
  $scope.searchIcon = "../images/search_icon.png";
  $scope.logo = "job pocket";
  $scope.menuIcon = "../images/nav_bar_icon.png"
//--END HEADER SECTION--\\

//--FOOTER SECTION--\\
  $scope.contact = "contact";
//--END FOOTER SECTION--\\

//--MAIN BODY/ MY LIST--\\
 $scope.headLine = "Wanted UX/UI Designer"
 $scope.fillerText = "Title Amadeus Consulting is a technology consulting company located in the heart of Boulder, CO. We are looking for dynamic developers to join our fast growing team! Benefits of Amadeus Consulting: A great learning opportunity with a supportive and collaborative team environment A chance to develop cutting edge technology in dynamic project ..."
//--END MAIN BODY/ MY LIST--\\

}]);



// app.controller("myListController", ["$scope", "httpFactory", "$timeout", function($scope, httpFactory, $timeout){


// }]);
