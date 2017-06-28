var app = angular.module("myapp", []);

app.controller("twoBinding", ["$scope","$rootScope", function ($scope,$rootScope) {
$scope.a=1;
$scope.b=2;
$scope.c=4;

$scope.$watch('a',function(newvalue,oldavalue){
if(newvalue != oldavalue){
    console.log("a modified to " +newvalue);
}
});

$scope.$watch('b',function(newvalue,oldavalue){
if(newvalue != oldavalue){
    console.log("b modified to " +newvalue);
    //The digest process goes to next iteration automatically, i
    //if the conditions mets here
if($scope.b>50){
    $scope.a =20;
}

}
});
$scope.$watch('c',function(newvalue,oldavalue){
if(newvalue != oldavalue){
    console.log("c modified to " +newvalue);
}
});

$rootScope.$watch(function(){
console.log("Digest process executing");

})


}]);