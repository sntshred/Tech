var app = angular.module("myapp",["ngRoute"]);
app.config(function($routeProvider){
     console.log("hello");
     $routeProvider
     .when('/first-emp',{
        templateUrl:"msg1.html",
        controller:"oneController",
        caseInsensitiveMatch:true
    })
    .when('/second-emp',{
      templateUrl:"msg2.html",
        controller:"twoController"
    })
    .when('/third-emp',{
        
redirectTo:function() {
            alert("go back to second emp");
            return '/second-emp'
        }

 })
    .when('/',{
      template:"<strong>Main Page </strong>"
       
    })
    .otherwise({
        redirectTo:"/"
    })
});

// app.controller("twoBinding",["$scope",function($scope){
// $scope.oneway1 = 10;
// $scope.oneway2 = 20;

// }]);

 app.controller("oneController",["$scope",function($scope){
$scope.a = 10;
$scope.b = 20;

}]);


 app.controller("twoController",["$scope",function($scope){
$scope.c = 110;
$scope.d = 200;

}]);
