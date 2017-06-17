/* global angular */

app.factory('MessageService', function($resource){
	return $resource('/api/message', {}, {
		update: {method: 'PUT'}
	});
});