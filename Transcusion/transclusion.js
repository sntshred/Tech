var app = angular.module("myapp", []);

app.controller("mycontroller",function(){


})

// using ng-transculed
app.directive("message",function(){
    return{
        templateUrl:"trans1.html"
    }
})


app.directive("message2",function(){
    return{
        templateUrl:"trans2.html",
        transclude:true
    }
})

//using linking function, transcculdeing is achiving
app.directive("message3",function(){
    return{
        templateUrl:"trans3.html",
        transclude:true, 
        link:function(scope,ielement,iattrs,controller,transclude){
            //Particular inside diretive data from the mian page, is captured in transclude
            var content = transclude();
            //ielement hold all the dom init and your fetching the id
            ielement.find("#linktransclude").append(content);
        }
    }
})
//usingcontroller function
app.directive("message4",function(){
    return{
        templateUrl:"trans3.html",
        transclude:true, 
        controller:function($scope,$element,$attrs,$transclude){
            //Particular inside diretive data from the mian page, is captured in transclude
            var content = $transclude();
            //ielement hold all the dom init and your fetching the id
            $element.find("#linktransclude").append(content);
        }
    }
})

app.directive("message5",function(){
    return{
        templateUrl:"trans5.html",
        transclude:true
       
    }
})

//Own built transclude directives 


app.directive("myTransculde",function(){
    return{
     link:function(cope,ielement,iattrs,controller,transclude){
         ielement.append(transclude());
     }
    }
})


















