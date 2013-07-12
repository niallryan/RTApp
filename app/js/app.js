'use strict';

var app = angular.module('RTApp', ['RTApp.controllers']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/movies', {templateUrl: 'partials/movies-list.html',   controller: "MoviesListCtrl"}).
      when('/movies/:movieId', {templateUrl: 'partials/movie-detail.html', controller: "MovieDetailCtrl"}).
      otherwise({redirectTo: '/movies'});
}]);