'use strict';

angular.module('yomanApp', ['ngRoute','ajoslin.mobile-navigate'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    transition: 'slide'
  })
  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl',
    transition: 'slide'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
    transition: 'slide'
  })
  .otherwise({
    redirectTo: '/'
  });
}).run(function($route, $http, $templateCache) {
  angular.forEach($route.routes, function(r) {
    if (r.templateUrl) {
      $http.get(r.templateUrl, {cache: $templateCache});
    }
  });
});