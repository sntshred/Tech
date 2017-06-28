var app = angular.module("myapp", []);

app.controller("mycontroller",function(){


})


app.directive("message",function(){
    return{
        templateUrl:"linkingFunSample.html",
        transclude:true, 
        controller:function($scope,$element,$attrs,$transclude){
            //Particular inside diretive data from the mian page, is captured in transclude
            // var content = $transclude();
            // //ielement hold all the dom init and your fetching the id
            // $element.find("#innerpanel").append(content);
            // $element.find("#innerpane2").append(content);
            
        //using transclude as callback function

        $transclude(cb1)

        function cb1(transCb){
            $element.find("#innerpanel").append(transCb);
                    }
        
        
        $transclude(cb2)

         function cb2(){
            $element.find("#innerpane2").append(transCb);
                    }


    }
    }
})









