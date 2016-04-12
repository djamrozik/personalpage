/**
 * Created by djamr on 4/12/2016.
 */

'use strict';

var directives = directives || angular.module('PortfolioWebsite.directives', []);

directives.directive('collapseNav', function(){

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
