var app = angular.module("myapp",["ngRoute"]);
app.config(function($routeProvider){
     console.log("hello");
     $routeProvider
     //Befor chaning in button click,normal way
    //  .when('/get',{
    //     templateUrl:"routeservicesample.html",
    //     controller:"oneController",
    //     caseInsensitiveMatch:true
    // })
     //After the click changing the path to reuse same role, with logic
     .when('/get/:option?/:a?/:b?',{
        templateUrl:"routeservicesample.html",
        controller:"oneController",
        caseInsensitiveMatch:true
    })
     
    .when('/',{
      template:"<strong>Main Page </strong>"
       
    })
    .otherwise({
          template:"<strong>No Contemt is availabl.!! </strong>"
    })
});


 app.controller("oneController",["$scope","routeService","$location","$interpolate","$routeParams","$route",function($scope,routeService,$location,$interpolate,$routeParams,$route){
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

       // console.log("the routeparams service ");
        $scope.isloading =true;
        routeService.getsum($scope.id,$scope.a,$scope.b).then(function(resullt){
    console.log(resullt);
    $scope.result = resullt.data;
        //console.log("Service call completed")
        $scope.isloading =false;

        });
    }
    else{
        $location.url('/get');
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

app.run(['$rootScope',function($rootScope){
$rootScope.$on('$routeChangeStart',function(e,curr,prev){
console.log("routeChangeStart"); 
})
$rootScope.$on('$routeChangeSuccess',function(e,curr,prev){
console.log("routeChangeSuccess");})
$rootScope.$on('$locationChangeStart',function(e,currUrl,prevurl,currstate,prevstate){
console.log("locationStart");})
$rootScope.$on('$locationChangeSuccess',function(e,currUrl,prevurl,currstate,prevstate){
console.log("locationSuccess");})
}])