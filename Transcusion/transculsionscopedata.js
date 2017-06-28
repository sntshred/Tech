var app = angular.module("myapp", []);

app.controller("mycontroller",function($scope){
$scope.a ={
    x:10
}

});

//Shared scope
// app.directive("message",function(){
//     return{
//         templateUrl:"transculsionscopedatasample.html",
//         transclude:true,
//         controller:function($scope,$element,$attrs){
//             $scope.b ={
//                 y: 20
//             }
//         }
        
       
//     }
// })

// //Inherited scope
// app.directive("message",function(){
//     return{
//         templateUrl:"transculsionscopedatasample.html",
//         transclude:true,
//         scope:true,
//         controller:function($scope,$element,$attrs){
//             $scope.b ={
//                 y: 20
//             }
//         }
        
       
//     }
// })


//Isolate scope
app.directive("message3",function(){
    return{
        templateUrl:"transculsionscopedatasample.html",
        transclude:true,
        scope:{},
        controller:function($scope,$element,$attrs){
            $scope.b ={
                y: 20
            }
        }
        
       
    }
})






