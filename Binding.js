var app = angular.module("myapp",[]);
app.controller("onewayBinding",["$scope",function($scope){
$scope.oneway1 = 10;
$scope.oneway2 = 20;

}])
app.controller("onetimeBinding",["$scope",function($scope){
$scope.oneway1 = 10;
$scope.oneway2 = 20;
$scope.sum = function(){
    $scope.oneway1 = $scope.oneway1 *2;
    $scope.oneway2 = $scope.oneway2*2;
    $scope.TotalSum = parseInt($scope.oneway1) +  parseInt($scope.oneway2);
}
}])
app.controller("twoBinding",["$scope",function($scope){
$scope.oneway1 = 10;
$scope.oneway2 = 20;
$scope.sum = function(){
    $scope.oneway1 = $scope.oneway1;
    $scope.oneway2 = $scope.oneway2;
    $scope.TotalSum = parseInt($scope.oneway1) +  parseInt($scope.oneway2);
}
}]);