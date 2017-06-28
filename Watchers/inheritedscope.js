var app = angular.module("myapp", []);

app.controller("twoBinding", ["$scope","$parse","$interpolate", function ($scope,$parse,$interpolate) {
$scope.a=1;
$scope.b=2;
$scope.o={
x:90,
y:100
}

}]);

app.controller("seondController", ["$scope","$parse","$interpolate", function ($scope,$parse,$interpolate) {
$scope.c=1;
$scope.d=2;

}]);
