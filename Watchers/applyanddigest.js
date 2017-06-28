var app = angular.module("myapp", []);

app.controller("twoBinding", ["$scope","$rootScope", function ($scope,$rootScope) {
$scope.a=1;
$scope.b=2;
$scope.s=0;

$scope.sum = function(){
    $scope.s= Number($scope.a)+Number($scope.b);
}

}]);

var notAngular = function(){
    var X = angular.element($("#div1")).scope();
    // X.s= Number(X.a)+Number(X.b);
X.$apply(function(){
     X.s= Number(X.a)+Number(X.b);
})


}