var app = angular.module("myapp",[]);
app.controller("twoBinding",["$scope","$http","$log",function($scope,$http,$log){
$scope.oneway1 = 10;
$scope.oneway2 = 20;
$scope.sum = function(){
    // $scope.oneway1 = $scope.oneway1;
    // $scope.oneway2 = $scope.oneway2;
    // $scope.TotalSum = parseInt($scope.oneway1) +  parseInt($scope.oneway2);

$http({
    url:"http://localhost:4467/sum?a="+parseInt($scope.oneway1) +"&b="+parseInt($scope.oneway2),
    method:'GET'
}).then(
function(resp){
    $log.log(resp.data);
$scope.TotalSum = resp.data;

},
function(resp){
$log.error("error occured")

}
)
}
}]);