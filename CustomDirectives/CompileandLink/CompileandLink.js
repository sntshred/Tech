var app = angular.module("myapp", []);

app.controller("twoBinding", ["$scope", function ($scope) {

}]);

app.directive("empDetails", function () {
    return {
        //It excutes 1 st
     compile: function(telemnt,tattributes){
         console.log(tattributes.hello + "--In Compile");
        return{
          pre:function(scope,ielement,iattributes){
         console.log(iattributes.hello+"--In pre linking state");

          },

          post:function(scope,ielement,iattributes){
         console.log(iattributes.hello+"--In post linking state");
              
          }
        } 
     },
     //It is exectute 2 nd
     controller: function($scope,$element,$attrs){
         console.log($attrs.hello+"--In cotroller");
     }

    }
});