
var app = angular.module('PortfolioWebsite', 
	['PortfolioWebsite.controllers', 
	 'PortfolioWebsite.factories',  
	 'ngRoute', 
	 'ngResource',
	 'ui.bootstrap']
);

app.config(['$compileProvider',
    function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
}]);