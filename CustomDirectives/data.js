
var app = angular.module("myapp",[]);
app.controller("twoBinding",["$scope","empservice",function($scope,empservice){
    
$scope.dosearch = function(){
empservice.findemployeeById($scope.searchtext,result)

}

function result(res){
    $scope.name = res.Emp_Name;
    $scope.city = res.Emp_City;
    $scope.Id = res.Emp_Id;
    $scope.Age = res.Emp_Age;

}

}]);

app.service("ermpservice",["$http","$log",function($http,$log){
this.findemployeeById = function(empno,cb)
{
$http({
    url:"http://localhost:50150/get/"+empno,
    method:"GET"
}).
then(function(resp){
    $log.log("then area");
cb(resp.data);
},function(resp){
    $log.log("Error cocoured");
    
})

}

}])