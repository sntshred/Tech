var app = angular.module("myapp", []);

app.controller("twoBinding", ["$scope","$parse","$interpolate", function ($scope,$parse,$interpolate) {
$scope.a=1;
$scope.b=2;
$scope.changavelue = function(){
    $scope.b =90;
}

}]);

app.directive("message",function(){
return {
    templateUrl:"sharedsample.html",
    controller: function($scope,$element,$attrs){
$scope.changavelue = function(){
    $scope.b =800;
}
    }

}

})
