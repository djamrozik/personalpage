
'use strict';

app.directive('leftColumn', function(){

	return {
		restrict: 'E',
		replace: true,
		scope:{
            data: '=info'
        },
		templateUrl: '/app/views/templates/leftColumn.html',
		link: function(scope, element, attrs) {

		}
	};

});