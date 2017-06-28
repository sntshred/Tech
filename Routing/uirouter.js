var app = angular.module("myapp",["ui.router"]);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
$stateProvider
.state('firstmessage',{
    url:'/first-msg',
    // template:'<strong>hello theis firstst message </strong>'
    templateUrl:'uimsg1.html',
    controller:'uimsg1'
    
})
.state('secondmessage',{
    url:'/second-msg',
    templateUrl:'uimsg2.html',
    controller:'uimsg2'
    
})
.state('root',{
    url:'/',
    template:'<strong>Home </strong>'
    
});
// .state('noroute',{
//     url:'*path',
//     template:'<strong>No route is found </strong>'
    
// });
$urlRouterProvider.otherwise('/');
}]);

app.controller('uimsg1',['$scope',function($scope){
$scope.a =10;
$scope.b=09;

}]);
app.controller('uimsg2',['$scope',function($scope){
$scope.c =10;
$scope.d =109;

}]);