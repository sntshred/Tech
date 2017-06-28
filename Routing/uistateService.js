var app = angular.module("myapp",["ui.router"]);
app.config(['$stateProvider','$urlRouterProvider',
function($stateProvider,$urlRouterProvider){
$stateProvider
.state('firstmessage',{
    // url:'/first-msg/:a/:b',
    url:'/first-msg/',
    
    // template:'<strong>hello theis firstst message </strong>'
    templateUrl:'calcul.html',
    controller:'uimsg1'
    
})

.state('add',{
    url:'/add/:a/:b',
    templateUrl:'resulttt.html',
    controller:'addctrl',
    data:{
        multi:90
    }
    
})

.state('multipily',{
    url:'/add/:a/:b',
    templateUrl:'resulttt.html',
    controller:'multipilyctrl',
    resolve:{
       result:function(routeService,$stateParams){
var a = $stateParams.a;
var b = $stateParams.b;

return routeService.getsum(1,a,b);

       }
    }
    
})

.state('root',{
    url:'/',
    template:'<strong>Home </strong>'
    
})
.state('noroute',{
    url:'*path',
    template:'<strong>No route is found </strong>'
    
});
$urlRouterProvider.otherwise('/');
}]);

app.controller('uimsg1',['$scope','$state','$stateParams',
function($scope,$state,$stateParams){
$scope.a =0
$scope.b=0;

$scope.doadd = function(){
    console.log($state.get());
$state.go('add',{
    a:$scope.a,
    b:$scope.b
})}

$scope.domulti = function(){
    console.log("hi this multi");
    $state.go('multipily',{
    a:$scope.a,
    b:$scope.b
})}

}]);

app.controller('addctrl',['$scope','$state','$stateParams','routeService',
function($scope,$state,$stateParams,routeService){
$scope.a =0
$scope.b=0;

if($stateParams.a){
    $scope.a=$stateParams.a;
}
if($stateParams.b){
    $scope.b=$state.params.b;
}
console.log('heoolw',$state.current);
// $scope.result= parseInt($scope.a)+parseInt($scope.b)+parseInt($state.current.data.multi);

$scope.loading =true;
routeService.getsum(1,$scope.a,$scope.b).then(function(re){
        $scope.result=re.data;  
        $scope.loading=false;
},function(erro){
    console.log(erro);
})


$scope.goback = function(){
    $state.go('firstmessage');
}
}]);

//Resolve 
app.controller('multipilyctrl',['$scope','$state','result',
function($scope,$state,result){
    console.log("multipily controller");

$scope.goback = function(){
    $state.go('firstmessage');
}

$scope.result=result.data;


}]);


app.run(['$rootScope',function($rootScope){
    $rootScope.$on('$stateChangeStart',function(e,toState,toParams,fromState,fromParams,options){
        console.log("in statehchangestart");
        if(toState.resolve){
            $rootScope.isresolvingSate=true;
        }
    });
        $rootScope.$on('$stateChangeSuccess',function(){
        console.log("in stateChangeSuccess");
        $rootScope.isresolvingSate=false;
    });
}]);
