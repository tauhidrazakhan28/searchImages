'use strict';

imageScrap.controller('searchImagesController', function($scope, $location, $rootScope, $http) {
  // console.log("I am in controller");
  $scope.searchingImg = function(data) {
    console.log(data);
    $http.post('searchingImg', data).success(function(response) {
        console.log(response);
    })
  }
});