var app = angular.module("myapp", []);

app.controller("twoBinding", ["$scope","$parse","$interpolate", function ($scope,$parse,$interpolate) {
$scope.a=1;
$scope.b=2;

$scope.emp ={
    name:"santosh",
    address:{
        city: "heyd",
        state :"Tels"
    }
}

$scope.demoEval = function(){
    // alert("the data is "+ $scope.$eval("a*b"));
    // alert("the data is "+ $scope.$eval("emp.address.city"));
    //The flower bracket taked the presendence here
    // alert("the data is "+ $scope.$eval("a*b*c",{
    //     c:3,
    //     a:5
    // }));
//To have a good control use function

alert($scope.$eval(function(scopyee, locally){
return scopyee.a*scopyee.b+locally.c;
},{c:89}))
}

//Parse is return the function, after the expression get evaluated
//then thate function can be used with any object like $scope,{} etc.

$scope.demoParse = function(){

//   var p = $parse("a*b");
//   var r =p($scope)
// alert("Parse result "+r);
    
    //It is similar to above 3 statements
// alert("The result parse "+ $parse("a*b")($scope));

// alert("The result parse "+ $parse("a*b")({
//     a:31,
//     b:90
// }));

//For one expression getting two different outputs
//   var p = $parse("a*b");
//   var r =p($scope)
// alert("Parse result "+r);

// var r2 = p({
//     a:3,
//     b:1
// });

// alert("the result of second obje"+ r2)

alert($parse("emp.address.city")($scope));
alert($parse("emp.address.city").assign($scope,"Dallas"));
}

$scope.demointerpolate = function(){
    // var f = $interpolate("Result={{a*b}}, the someother calculation = {{a*b*10}}");
    // var r1 = f($scope);
    // alert("result of $interpolate "+ r1);
// alert("the result of $interpolate"+ $interpolate("{{a*b}}")($scope));

//Even u could include filters in the expression

alert("the result of $interpolate"+ $interpolate("{{a*b | currency:'USD$'}}")($scope));






}


}]);