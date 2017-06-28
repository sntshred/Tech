var app = angular.module("myapp", []);

app.controller("twoBinding", ["$scope", function ($scope) {
$scope.a=1;
$scope.b=2;
$scope.c=4;

// $scope.updatec = function(){
//     $scope.c = $scope.a*3;
// };


// $scope.$watch("a",function(newValue, oldValue){
//     if(newValue != oldValue){
//        $scope.b = $scope.a*2;
//     }
// });


// $scope.$watch("b",function(newValue, oldValue){
//     if(newValue != oldValue){
//        $scope.c = $scope.a*3;
//     }
// });



// $scope.$watch("c",function(newValue, oldValue){
//     if(newValue != oldValue){
//        $scope.c = $scope.b*3;
//     }
// });

//Watch group

// $scope.$watchGroup(["a","b"],function(newValue, oldValue){
//     if(newValue != oldValue){
//        $scope.c = $scope.b * $scope.a;
//     }
// });

//watch collections
// $scope.o={
// a:1,
// b:2,
// c:4
// };

// $scope.$watch("o",function(newValue, oldValue){
//     if(newValue != oldValue){
//        $scope.o.c = $scope.o.b * $scope.o.a;
//     }
// },true);

//Array object
$scope.emps=[
{empno:"101",empname:"santos"},
{empno:"102",empname:"santos2"},
{empno:"103",empname:"santos3"},
{empno:"104",empname:"santos4"},
];

$scope.addEmp = function(){
    //debugger;
    var newempno = 100+$scope.emps.length+1;
    var newEmpanme =  $scope.emps[2].empname+"kop"+newempno;
$scope.emps.push({empno:newempno,empname:newEmpanme});
}

$scope.modify = function(){
    $scope.emps[2].empname="money";
}

// $scope.$watch("emps",function(newValue, oldValue){
//     if(newValue != oldValue){
//       console.log("no of employees"+$scope.emps.length);
//     }
// });

//Editied value will not capture in this watch i.e $scope.modify
// $scope.$watchCollection("emps",function(newValue, oldValue){
//     if(newValue != oldValue){
//       console.log("no of employees"+$scope.emps.length);
//     }
// });

//Editied value will capture in this watch i.e $scope.modify

$scope.$watch("emps",function(newValue, oldValue){
    if(newValue != oldValue){
      console.log("no of employees"+$scope.emps.length);
    }
},true);









}]);