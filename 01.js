var app = angular.module("myapp",[]);
// app.controller("mycontroller",function($scope){
// $scope.headerValue="hellolw orolld";
// $scope.salary = 3232;
// $scope.getsalary=function(){
//     return (this.salary)*12;
// }
// }); 

var app = angular.module("myapp",[]);
app.controller("mycontroller",["$scope",function(c){
c.headerValue="hellolw orolld";
c.salary = 3232;
c.getsalary=function(){
    return (this.salary)*12;
}
}]); 


// app.controller("secondController",function(){
// this.headerValue="hellolw orolld";
// this.salary = 3232;
// this.getsalary=function(){
//     return (this.salary)*12;
// }
// }); 

// Hybrid method

app.controller("secondController",["$scope",function($scope){
     $scope.second = this;
this.headerValue="hellolw orolld";
this.salary = 3232;
this.getsalary=function(){
    return (this.salary)*12;
}
}]); 
