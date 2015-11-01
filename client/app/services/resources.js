/* global angular */

var factories = factories || angular.module('PortfolioWebsite.factories', []);

factories.factory('MessageService', function($resource){
	return $resource('/api/message', {}, {
		update: {method: 'PUT'}
	});
});