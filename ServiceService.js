var app = angular.module("myapp",[]);
app.controller("twoBinding",["$scope","$http","$log","sumService",function($scope,$http,$log,sumService){
$scope.oneway1 = 10;
$scope.oneway2 = 20;
$scope.sum = function(){
    
//   $scope.TotalSum=  sumService.getsum($scope.oneway1,$scope.oneway2);
 sumService.getsum($scope.oneway1,$scope.oneway2,name);
    
    
    
//     function name(a,b){
//     $scope.TotalSum= parseInt(a) + parseInt(b);
// }

// //For the $http factory level service
function name(a){
   $scope.TotalSum =a;   
}

 $log.log("this is controller area");

 }


}]);

app.service("sumService", ["$log","$http",function($log,$http){
$log.log("Factory is started");

// this.getsum = function(a,b){
// return parseInt(a) + parseInt(b);
// var s= parseInt(a) + parseInt(b);
//cb(a,b);

 //}
// // debugger;
// this.getsum = function(a,b,cb){
// //var s= parseInt(a) + parseInt(b);
// cb(a,b);

// }
//using http service 
 this.getsum = function(a,b,cb){ 
     $http({
    url:"http://localhost:4467/sum?a="+a +"&b="+b,
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




//Here the execuation of call back function is not working in factory level, 
//it will work at the scope level
// function name(a,b){
//      return  parseInt(a) + parseInt(b);
// }



}]);