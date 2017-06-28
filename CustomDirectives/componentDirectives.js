var app = angular.module("myapp",[]);
app.controller("twoBinding",["$scope",function($scope){
$scope.oneway1 = 10;
$scope.oneway2 = 20;

}]);

//custom Compent method 1
// app.directive("myInfoDirective",function(){
// return {
//     template: "<strong>Coming From Custom Directive {{oneway1}} </strong>"
// };

// })

//Custom directive Compent method 2
// app.directive("myInfoDirective",function(){
// return {
//     templateUrl: "myInfoId.html"
// };

// })

//loading the file, compnet method 3

app.directive("myInfoDirective",function(){
return {
    templateUrl: "myinformation.html"
};

})