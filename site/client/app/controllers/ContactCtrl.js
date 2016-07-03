/* global moment */
/* global angular */
'use strict';

var controllers = controllers || angular.module('PortfolioWebsite.controllers', []);

controllers.controller('ContactController', ['$scope', 'MessageService',
	function($scope, MessageService){

	var vm = this;

	vm.message = {};
	vm.sendSuccess = false;
	vm.sendError = false;

	vm.init = function(){
		//nothing yet
	};

	// Send the message to the backend, where it can be email to me
	vm.submit = function(message){
		MessageService.save(message, function(response){
			vm.sendSuccess = false;
			vm.sendError   = true;
		}, function(error){
			vm.sendSuccess = false;
			vm.sendError   = true;
		});
	};

	vm.init();
	
}]);