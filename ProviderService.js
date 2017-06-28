var app = angular.module("myapp",['ngTouch', 'ui.grid']);
app.controller("twoBinding",["$scope","$http","$log","providerService",function($scope,$http,$log,providerService){
$scope.oneway1 = 10;
$scope.oneway2 = 20;
$scope.sum = function(){
    
//  $scope.TotalSum = providerService.getsum($scope.oneway1,$scope.oneway2);

  providerService.getsum($scope.oneway1,$scope.oneway2,name);


//   function name(a,b){
//     $scope.TotalSum= parseInt(a) + parseInt(b);
//  }


function name(a){
   $scope.TotalSum =a;   
}

  }

  
}]);

app.provider("providerService",function(){

var baseurl ="";

this.settings = function(url){
   baseurl=url;
}

this.$get = ["$log","$http",function($log,$http){
    $log.log("provide stater heree");
var oCalservice ={};
debugger;
// oCalservice.getsum = function(a,b,cb){
// // return parseInt(a) + parseInt(b);
// cb(a,b);

// };
 oCalservice.getsum = function(a,b,cb){ 
     $http({
    // url:baseurl+"/sum?a="+a +"&b="+b,
    url:baseurl+"/get",
    
    method:'GET'
}).then(
function(resp){
    $log.log(resp.data);
    cb(resp.data);

},
function(resp){
$log.error("error occured");

}
)
 }


return oCalservice;
}];
});


app.config(["providerServiceProvider",function(providerServiceProvider){
providerServiceProvider.settings("http://localhost:50150");
}]);
