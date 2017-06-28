var app = angular.module("myapp", []);

app.controller("twoBinding", ["$scope", function ($scope) {

}]);

// app.directive("empDetails", function ($interpolate) {
//     return {
//         //It excutes 1 st
//      compile: function(telemnt,tattributes){
//          telemnt.css("border","1px solid red");
//          console.log(tattributes.hello + "--In Compile");
//         return{
//           pre:function(scope,ielement,iattributes){
//          console.log(iattributes.hello+"--In pre linking state");

//           },

//           post:function(scope,ielement,iattributes){
//          console.log(iattributes.hello+"--In post linking state");
//          if(iattributes.hello === "3"){
//               ielement.css("background","green");
//          }
//             ielement.on("click",scope.btnclick);

//           }
//         } 
//      },
//      //It is exectute 2 nd
//      controller: function($scope,$element,$attrs){
//          var v = $interpolate($attrs.hello)($scope);
//          console.log(v+"--In cotroller");
//             $scope.btnclick = function(){
//                 alert("directive clicked here"+ $attrs.hello);
//             }

//      }

//     }
// });

// Working with out compile

// app.directive("empDetails", function ($interpolate) {
//     return {
     
//      //reomving of comoile, but we are workng with only link realated stuff add link 
//        link: {
//           pre:function(scope,ielement,iattributes){
//          console.log(iattributes.hello+"--In pre linking state");

//           },

//           post:function(scope,ielement,iattributes){
//          console.log(iattributes.hello+"--In post linking state");
//          if(iattributes.hello === "3"){
//               ielement.css("background","green");
//          }
//             ielement.on("click",scope.btnclick);

//           }
         
//      },
//      //It is exectute 2 nd
//      controller: function($scope,$element,$attrs){
//          var v = $interpolate($attrs.hello)($scope);
//          console.log(v+"--In cotroller");
//             $scope.btnclick = function(){
//                 alert("directive clicked here"+ $attrs.hello);
//             }
//      }
     

//     }
// });

//working with out pre, please check the return of compile

// app.directive("empDetails", function ($interpolate) {
//     return {
//          compile: function(telemnt,tattributes){
//          telemnt.css("border","1px solid red");
//          console.log(tattributes.hello + "--In Compile");
     
//      // post - link function here, shortcut don't get confuse
//            return function(scope,ielement,iattributes){
//          console.log(iattributes.hello+"--In post linking state");
//          if(iattributes.hello === "3"){
//               ielement.css("background","green");
//          }
//             ielement.on("click",scope.btnclick);

//           }
         
//      },
//      //It is exectute 2 nd
//      controller: function($scope,$element,$attrs){
//          var v = $interpolate($attrs.hello)($scope);
//          console.log(v+"--In cotroller");
//             $scope.btnclick = function(){
//                 alert("directive clicked here"+ $attrs.hello);
//             }
//      }
     

//     }
// });

//Working with only post functin

app.directive("empDetails", function ($interpolate) {
         return  function(scope,ielement,iattributes){
         console.log(iattributes.hello+"--In post linking state");
         if(iattributes.hello === "3"){
              ielement.css("background","green");
                }

            }
});
















