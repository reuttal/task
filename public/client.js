angular.module('app', []).controller('cont', function($scope, $http) {
    	
	$http.get('http://localhost:8888/status').
        success(function(data) {
            $scope.status = data.status;
        });
	
    $http.get('http://localhost:8888/availability').
	    success(function(data) {
	        $scope.availability = data;
	    });
});	