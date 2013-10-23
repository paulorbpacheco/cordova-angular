'use strict';

angular.module('yomanApp')
.directive('ngTap', function () {
	var isTouchDevice = !! ('ontouchstart' in window);
	return function(scope, elm, attrs) {
		if (isTouchDevice) {
			var tapping = false;
			elm.bind('touchstart', function() { tapping = true; });
			elm.bind('touchmove', function() { tapping = false; });
			elm.bind('touchend', function() {
				return tapping && scope.$apply(attrs.ngTap);
			});
		} else {
			elm.bind('click', function() {
				scope.$apply(attrs.ngTap);
			});
		}
	};
});