/* global angular */
'use strict';

var controllers = controllers || angular.module('PersonalApp.controllers', []);

//this is the only controller that needs to be declared in html b/c it doesn't go through routeProvider
controllers.controller('HomeController', ['$scope', '$location', function($scope, $location){
	
	var self = this;
	
	self.goToAlarmClock = function(){
		$location.path('/videoalarmclock');
	};
	
	$scope.goToAlarmClock = function(){
		self.goToAlarmClock();
	};
	
}]);