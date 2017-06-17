/**
 * Created by djamr on 4/12/2016.
 */

'use strict';

app.directive('collapseNav', function(){

    return {
        restrict: 'E',
        replace: true,
        scope:{
            data: '=info',
            mode: '=mode'
        },
        templateUrl: '/app/views/templates/collapseNav.html',
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
