/* global angular */
var app = angular.module('PersonalApp', ['ngResource', 'ngRoute', 'PersonalApp.controllers']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/videoalarmclock', {templateUrl: '/client/app/views/videoalarmclock.html', controller: 'AlarmClockController'});
	$routeProvider.otherwise({ redirectTo: '/' });
}
]);

/*

TODO:

1) Fix routing problem
   --> but probably consider not doing a spa or some way around loading required files
2) Start adding actual content about myself, then start doing css standings
3) Instead of blank space on the home page on the right side, show the background and let it scroll
4) Change the 'view' box when mousing over a recent work item
5) I should add a what can I do section and make the recent work a bit smaller
6) Make my name a bit larger when it comes to font
*/