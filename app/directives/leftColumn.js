
'use strict';

app.directive('leftColumn', function(){

	return {
		restrict: 'E',
		replace: true,
		scope:{
            data: '=info',
			mode: '=mode'
        },
		templateUrl: '/app/views/templates/leftColumn.html',
		link: function(scope, element, attrs) {

			// test various modes to render the correct links
			if (scope.mode) {
				scope.mode.mode === 'blog' ? scope.blog_mode = true : scope.blog_mode = false;
			} else {
				scope.home_mode = true;
			}

		}
	};

});