var search = angular.module("search",[]);

search.controller('JSONCtrl', function($scope, $http){
    $http.get('/hardware.json')
    .then(function(res){
        $scope.startups = res.data;
    });
});

