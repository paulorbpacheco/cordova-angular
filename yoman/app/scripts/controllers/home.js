'use strict';

angular.module('yomanApp')
.controller('HomeCtrl', function ($scope, $navigate) {
	$scope.$navigate = $navigate;
	$scope.awesomeThings = [
		'HTML5 Boilerplate',
		'AngularJS',
		'Karma'
	];
});
