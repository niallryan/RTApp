'use strict';

/* Controllers */

var controllers = angular.module('RTApp.controllers', []);

controllers.controller('AppCtrl', function($scope) {
	
});

controllers.controller('MoviesListCtrl', function($scope, $routeParams, $http) {
	$scope.list;

	$scope.page = 1;

	$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit=12&page=' + $scope.page + '&apikey=2fu8bhwngnxuc6a56pburxfm&callback=JSON_CALLBACK').then(function(data) {
			console.log(data);
			$scope.list = data.data;
		});

	$scope.loadNextPage = function () {
		$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit=12&page=' + ($scope.page + 1) + '&apikey=2fu8bhwngnxuc6a56pburxfm&callback=JSON_CALLBACK').then(function(data) {
			console.log(data);
			$scope.list = data.data;
			$scope.page = $scope.page + 1;
			if ($scope.page > 10) {
				$scope.page = 1;
			}
		})
	}

});

controllers.controller('MovieDetailCtrl', function($scope, $routeParams, $http) {
	$scope.detail;

	$scope.movieId = $routeParams.movieId;

  	$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/' + $scope.movieId + '.json?apikey=2fu8bhwngnxuc6a56pburxfm&callback=JSON_CALLBACK').then(function(data) {
			console.log(data);
			$scope.detail = data.data;	
		});

});