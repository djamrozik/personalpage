/**
 * Created by djamr on 4/12/2016.
 */

'use strict';

app.directive('collapseNav', function(){

    return {
        restrict: 'E',
        replace: true,
        scope:{
            data: '=info'
        },
        templateUrl: '/app/views/templates/collapseNav.html',
        link: function(scope, element, attrs) {

        }
    };

});
