app.service("empservice", ["$http", "$log", "$rootScope",function ($http, $log,$rootScope) {
    this.getEmployee = function (cb) {
        $http({
            url: "http://localhost:50150/get",
            method: "GET"
        }).
            then(function (resp) {
                $log.log("then area");
                cb(resp.data);
            }, function (resp) {
                $log.log("Error cocoured");

            })
    }
     this.getEmployeeByID = function (cb) {
        $http({
            url: 'http://localhost:50150/get/'+$rootScope.toParams.id,
            method: "GET"
        }).
            then(function (resp) {
                $log.log(resp.data);
                cb(resp.data);
            }, function (resp) {
                $log.log("Error cocoured");

            })

        }
}]);
app.config(['$stateProvider','$urlRouterProvider',
function($stateProvider,$urlRouterProvider){
$stateProvider
.state('firstmessage',{
     url:'/first-msg',
     templateUrl:'uimsg1.html',
    controller:'uimsg1'
    
})
.state('firstmessage1',{
      url:'/first-msg1',
      views:{
        '':{
            templateUrl:'uimsg1.html',
            controller:'uimsg1'
            },
      'multiview':{
          template:'Hello this multiview'
      }
      }
})
.state('Employees',{
      url:'/get',
      views:{
        'emp-header':{
            templateUrl:'emp-header.html'
            
            },
      'emp-list':{
          templateUrl:'emp-list.html',
          controller:'employeectr'
      }
      }
})
.state('EmployeesDetails',{
      url:'/get/:id',
      views:{
        'emp-header':{
            templateUrl:'emp-header.html'
            
            },
      'emp-details':{
          templateUrl:'empDetails.html',
          controller:'empDetailsctr'
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


}])

app.controller('employeectr',['$scope','empservice',function($scope,empservice){
 $scope.isloading = true;
 empservice.getEmployee(result);

function result(res){
  $scope.Employees=res;
 $scope.isloading = false;
  
}

}])

app.controller('empDetailsctr',['$scope','empservice','$stateParams',
function($scope,empservice,$stateParams){
 $scope.isloading = true;
 console.log('Hii'+$stateParams.id);
 empservice.getEmployeeByID(xa);
 function xa(res){
  $scope.Employees = res;
 $scope.isloading = false;
  
}

}])

.run(['$rootScope', function($rootScope){
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        $rootScope.toParams = toParams;
    });
}]);