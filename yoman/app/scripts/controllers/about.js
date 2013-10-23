'use strict';

angular.module('yomanApp')
.controller('AboutCtrl', function ($scope, $navigate) {
	$scope.$navigate = $navigate;
	$scope.awesomeThings = [
		'HTML5 Boilerplate',
		'AngularJS',
		'Karma'
	];
});
