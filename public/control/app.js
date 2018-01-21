var imageScrap = angular.module('imageScrap', [
	'ngRoute',
    ]);

imageScrap.config(function($routeProvider) {
	// $controllerProvider.allowGlobals();
	$routeProvider
	.when('/',
		{
			templateUrl : "./html/searchImg.html",
			controller  : "searchImagesController",
		})
	
	.otherwise({
        redirectTo: '/'
      });

});