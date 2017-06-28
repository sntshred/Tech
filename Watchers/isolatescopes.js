var app = angular.module("myapp", []);

app.controller("twoBinding", ["$scope","$parse","$interpolate", function ($scope,$parse,$interpolate) {
$scope.a=1;
$scope.b=2;
$scope.c=1;
$scope.d=2;

$scope.employ = {
    empname :"sant",
    empcity:"hyderabad"
}

$scope.employ2 = {
    empname :"manish",
    empcity:"florida"
}

$scope.dosum = function(x,y){
 var m =parseInt(x)+parseInt(y);
alert("this is sum"+ m) 
}
}]);



app.directive("message",function(){
    return {
        templateUrl:"isolatesample.html",
        scope:{
            x:"@",
            y:"@"

        },
        controller:function($scope,$element,$attrs){
$scope.doprocess = function(){
    $scope.mn =32;
        var r = parseInt($scope.x)+parseInt($scope.y)+$scope.mn;
    alert("sum "+ r) ;
       }

}
    }
})


app.directive("message2",function(){
    return {
        templateUrl:"isolatesample.html",
        scope:{
            x:"@m",
            y:"@n"

        }
    }
})

//object related directive scoping


app.directive("objectisolatescoping",function(){
  return {

      templateUrl:"objectisolatescoping.html",
      scope:{
          employee: "="
      }
  }  
})

//with nane object manually defining
app.directive("objectisolatescoping2",function(){
  return {

      templateUrl:"objectisolatescoping.html",
      scope:{
          employee: "=oEmp"
      }
  }  
})

//directve for methods using "&""

app.directive("methodisolatescoping",function(){
  return {

      templateUrl:"methodisolatescoping.html",
      scope:{
        //   empSum: "&"
          empSum: "&justSum"
        
        },
        controller:function($scope,$element,$attrs){
            $scope.dircSum = function(){
                $scope.empSum({m:$scope.p,n:$scope.q})
            }
        }
  }  
})




















