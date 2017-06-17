/* global moment */
/* global angular */
'use strict';

var controllers = controllers || angular.module('PortfolioWebsite.controllers', []);

controllers.controller('MergelySandboxController', ['$scope',
	function($scope){

	var vm = this;

	var fullOptions;

	//default settings to render the editor itself
	var baseOptions = {
		cmsettings: { readOnly: false, lineNumbers: true },
		lhs: function(setValue) {
			setValue('This is an article that someone \nmay be working on. As \nchanges occur, this thing would \nclearly show what changed');
		},
		rhs: function(setValue) {
			setValue('This is an article that a \nwriter may be working on. As \nchanges are inevitable, this would \nclearly show to the writers what changed');
		}
	};

	//default sandbox settings
	$scope.mSettings = {
		sidebar: false,
		line_numbers: true,
		editor_width: '400px'
	};
	
	vm.init = function(){
		renderDiff(); //initial render
		vm.getDiffFile();
	};

	//sets a correct url for the blob object
	//no idea how this works but its pretty neat
	vm.getDiffFile = function(){

		$(document).ready(function() {
			$scope.diffText = $('#compare').mergely('diff');

			var blob = new Blob([ $scope.diffText ], { type : 'text/plain' });
			$scope.urlDiff = (window.URL || window.webkitURL).createObjectURL( blob );
		});
	};

	var renderDiff = function(){

		fullOptions = baseOptions;

		//add each key/value of mSettings into fullOptions, which will be rendered
		for (var key in $scope.mSettings) {
			fullOptions[key] = $scope.mSettings[key]; 
		}

		$(document).ready(function () {
			$('#compare').mergely(fullOptions);
		});

	};

	var updateDiff = function(resize){

		//get new options, start from base
		fullOptions = baseOptions;
		for (var key in $scope.mSettings) {
			fullOptions[key] = $scope.mSettings[key]; 
		}

		$(document).ready(function(){
			$('#compare').mergely('options', fullOptions); //load the new options

			if (resize) $('#compare').mergely('resize');

			$('#compare').mergely('update');
		});
	}

	//everytime the mSettings object changes, reload the editor
    $scope.$watch("mSettings", function ( newValue, oldValue ) {
    	newValue.editor_width == oldValue.editor_width ? updateDiff() : updateDiff(true);
	    vm.getDiffFile();
	}, true);

	vm.init();
	
}]);