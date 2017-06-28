var app = angular.module("myapp",[]);
app.controller("twoBinding",["$scope","empservice",function($scope,empservice){
    
$scope.oneway1 = 10;
$scope.oneway2 = 20;

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


app.service("empservice",["$http","$log",function($http,$log){
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

}]);

app.directive("empDetails",function(){
    return {
        templateUrl:"decoraterdatafromdecdata.html"
    }
})


