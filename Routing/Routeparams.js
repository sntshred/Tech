var app = angular.module("myapp",["ngRoute"]);
app.config(function($routeProvider){
     console.log("hello");
     $routeProvider
     .when('/sum/:a/:b',{
        templateUrl:"msg1.html",
        controller:"oneController",
        caseInsensitiveMatch:true
    })
     .when('/suminput',{
        templateUrl:"suminput.html",
        controller:"suminputCtr",
        caseInsensitiveMatch:true
    })
   
   .when('/sumfour/:a/:b/:c?/:d?',{
        templateUrl:"sumfour.html",
        controller:"sumfourCtr",
        caseInsensitiveMatch:true
    })  
    .when('/calc/:option/:a?/:b?',{
      redirectTo:function(params,path,search){
        console.log(params);
        if(params.option=="sum"){
            return "/sum/"+(params.a-0)+"/"+(params.b-0);
        }
       else if(params.option=="input"){
            return "/suminput";
        }
        else{
            return "/";
        }
      }
    })
    .when('/',{
      template:"<strong>Main Page </strong>"
       
    })
    .otherwise({
          template:"<strong>No Contemt is availabl.!! </strong>"
    })
});

// app.controller("twoBinding",["$scope",function($scope){
// $scope.oneway1 = 10;
// $scope.oneway2 = 20;

// }]);

 app.controller("oneController",["$scope","$routeParams",function($scope,$routeParams){
$scope.a = $routeParams.a;
$scope.b = $routeParams.b;

}]);

 app.controller("suminputCtr",["$scope","$location","$interpolate",function($scope,$location,$interpolate){
$scope.a = 0;
$scope.b = 0;
$scope.dosum=function(){
var url = $interpolate("sum/{{a}}/{{b}}")($scope);
  console.log(url);
$location.path(url);
}
}]);

 app.controller("sumfourCtr",["$scope","$routeParams",function($scope,$routeParams){
$scope.a = $routeParams.a;
$scope.b = $routeParams.b;
$scope.c = $routeParams.c;
$scope.d = $routeParams.d;
}]);