var app = angular.module("myapp", []);

app.controller("twoBinding", ["$scope","$rootScope", function ($scope,$rootScope) {
$scope.data=[
{v:14,r:2},
{v:12,r:3},
{v:13,r:4},
{v:11,r:5},
];

$scope.GetTotal = function(){
    var s =0;
    for(var i = 0; i<$scope.data.length;i++){
        var o = $scope.data[i];
        s +=o.r;
    }
    return s;
}
}]);

app.directive("myInfoDirective",function(){

    return {
        templateUrl:"digestDirectivepage.html",
        compile: function(tElememt, tAttributes){
            return function(scope, ielement, iAttribures,controller){
        ielement.find("#btnsum").on("click",scope.btnClick);
            }
        },
        controller: function($scope,$element,$attrs){
            $scope.btnClick = function(){
               $scope.o.r = $scope.o.r * $scope.o.r ;
             $scope.$apply();
            }
        }

        
    }
});
