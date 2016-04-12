/* global moment */
/* global angular */
'use strict';

var controllers = controllers || angular.module('PortfolioWebsite.controllers', []);

controllers.controller('IndexController', ['$scope',
	function($scope){

	var vm = this;

	vm.message = {};
	vm.sendSuccess = false;
	vm.sendError = false;
	
	vm.init = function(){
		//nothing yet
	};

	vm.scrollToId = function(id, fromTopNav){

		var extra_offset = 0;

		if (fromTopNav) {
			extra_offset += 30;
		}

		//scroll to the element with jquery
	    $('html, body').animate({
	        scrollTop: $("#" + id).offset().top - extra_offset
	    }, 2000);

		// close navbar-more if scroll from top nav
		if (fromTopNav) {
			$(".collapse-navbar-more").hide();
		}

	};

	/**
	* Send the message to the backend, where it can be email to me
	*/
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