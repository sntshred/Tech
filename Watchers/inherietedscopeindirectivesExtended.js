var app = angular.module("myapp", []);

app.controller("twoBinding", ["$scope","$parse","$interpolate", function ($scope,$parse,$interpolate) {
$scope.a=1;
$scope.b=2;
$scope.o={
x:90,
y:100
}

$scope.changeB =function(){
    $scope.b =123;
}
}]);

app.directive("message",function(){
    return {
        templateUrl:"inherietedscopeindirectivessampleExtended.html",
        scope:true
        
    }
})
