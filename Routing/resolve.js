var app = angular.module("myapp",["ngRoute"]);
app.config(function($routeProvider){
     console.log("hello");
     $routeProvider
    
     //After the click changing the path to reuse same role, with logic
     .when('/get/:option?/:a/:b?',{
        templateUrl:"routeservicesample.html",
        controller:"oneController",
        caseInsensitiveMatch:true,
        resolve:{
            resolveResult:function(routeService,$route,$q){
                var a = $route.current.params.a;
                var b = $route.current.params.b;
              
                return routeService.getsum(1,a,b).then(function(res){
                        if(res.data>40){
                            return $q.reject('cant have more value');
                        }
                        else {
                            return res; 
                        }

                })
                
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

 app.controller("oneController",["$scope","routeService","resolveResult","$location","$interpolate","$routeParams","$route",function($scope,routeService,resolveResult,$location,$interpolate,$routeParams,$route){
$scope.id = 1;
$scope.a = 0;
$scope.b = 0;

if($routeParams.a){
$scope.a =$routeParams.a;
}
if($routeParams.b){
$scope.b =$routeParams.b;
}

if($routeParams.a && $routeParams.b && $routeParams.option){
    if($routeParams.option==1){
        console.log("the routeparams service ");
    //    $scope.isloading =true;
$scope.isresolve =true;
    
$scope.result =resolveResult.data;
$scope.isresolve =false;

    //     routeService.getsum($scope.id,$scope.a,$scope.b).then(function(resullt){
    // console.log(resullt);
    // $scope.result = resullt.data;
    //     //console.log("Service call completed")
    //   $scope.isloading =false;

    //     });
    }
  
}

// <!-- changing the current path after the click -->
$scope.btnClick = function(){

//routeService.getsum($scope.id,$scope.a,$scope.b).then(function(resullt){
// console.log(resullt);
// $scope.result = resullt.data;

//})
console.log("inside the controller");
var path = $interpolate('/get/1/{{a}}/{{b}}')($scope);
if($location.path()==path){
    console.log("inside the path");
    $route.reload();
}else{

$location.url(path);
}
}
 
$scope.update = function(){
    $route.updateParams({
        a:$scope.a,
        b:$scope.b
    })
}
}]);

app.run(['$rootScope','$window',function($rootScope,$window){
$rootScope.$on('$routeChangeStart',function(e,curr,prev){
console.log("routeChangeStart"); 
$rootScope.isresolve =true;
})
$rootScope.$on('$routeChangeSuccess',function(e,curr,prev){
console.log("routeChangeSuccess");})
$rootScope.isresolve =false;

$rootScope.$on('$routeChangeError',function(e,curr,prev,rejection){
console.log("routeChangeError"+rejection);

if(curr.$$route.originalPath=="/get/:option?/:a/:b?"){
    $window.history.back();
}
})
$rootScope.isresolve =false;

// $rootScope.$on('$locationChangeStart',function(e,currUrl,prevurl,currstate,prevstate){
// console.log("locationStart");})
// $rootScope.$on('$locationChangeSuccess',function(e,currUrl,prevurl,currstate,prevstate){
// console.log("locationSuccess");})
}])