var app = angular.module("myapp",["ui.router"]);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
$stateProvider
.state('firstmessage',{
    // url:'/first-msg/:a/:b',
    url:'/first-msg/{a:[0-9]+}/{b}',
    
    // template:'<strong>hello theis firstst message </strong>'
    templateUrl:'uimsg1.html',
    controller:'uimsg1'
    
})
.state('secondmessage',{
    //Regular expression is added below
    url:'/second-msg/{a:[0-9]+}/{b}',
    templateUrl:'uimsg2.html',
    controller:'uimsg2'
    
})
.state('thirdmessage',{
    //optional by default, one or no parmeter
    url:'/third-msg/:a',
    templateUrl:'uimsg2.html',
    controller:'uimsg2'
    
})
.state('thirdmessage2',{
    //  goes here if both are provided
        url:'/third-msg/:a/:b',
    templateUrl:'uimsg2.html',
    controller:'uimsg2'
    
})
.state('fourthmessage',{
    url:'/fourth-msg', //can't be used as part of routing url
    templateUrl:'uimsg2.html',
    controller:'uimsg2',
    params:{
        //this are default values
        a:{value:'1'},
        b:{value:'2'}
 }
 })
 .state('fifthmessage',{
     // "//" works only in routing url
    url:'/fifth-msg/:a/:b', //can't be used as part of routing url
    templateUrl:'uimsg2.html',
    controller:'uimsg2',
    params:{
        //this are default values
        a:{value:'1'},
        b:{value:'2'}
    
}
    
})
.state('sixthmessage',{
     // "//" works only in routing url
    url:'/sixth-msg/:a/:b', //can't be used as part of routing url
    templateUrl:'uimsg2.html',
    controller:'uimsg2',
    params:{
        //this are default values
        a:{value:'1',squash:true},
        b:{value:'2',squash:true}
    
}
    
})
.state('seventhmessage',{
     // "//" works only in routing url
    url:'/seventh-msg/:a/:b', //can't be used as part of routing url
    templateUrl:'uimsg2.html',
    controller:'uimsg2',
    params:{
        //to get the degault values
        a:{value:'1',squash:"-"},
        b:{value:'2',squash:"~"}
    
}
    
})

.state('eighthmessage',{
     // "//" works only in routing url
    url:'/eight-msg?a&b', //can't be used as part of routing url
    templateUrl:'uimsg2.html',
    controller:'uimsg2'
      
})


.state('ninthmessage',{
     // "//" works only in routing url
    url:'/ninth-msg?a&b', //can't be used as part of routing url
    templateUrl:'uimsg2.html',
    controller:'uimsg2',
     params:{
        //to get the degault values
        a:{value:'1',squash:"-"},
        b:{array:true}
    
}
      
})






.state('root',{
    url:'/',
    template:'<strong>Home </strong>'
    
})
.state('noroute',{
    url:'*path',
    template:'<strong>No route is found </strong>'
    
});
$urlRouterProvider.otherwise('/');
}]);

app.controller('uimsg1',['$scope','$stateParams',function($scope,$stateParams){
$scope.a =$stateParams.a;
$scope.b=$stateParams.b;

}]);
app.controller('uimsg2',['$scope','$stateParams',function($scope,$stateParams){
$scope.c =$stateParams.a;
$scope.d=$stateParams.b;

}]);