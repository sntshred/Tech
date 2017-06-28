var app= angular.module('myapp',['ui.router']).config(['$stateProvider',function($stateProvider){
$stateProvider.state('firstmessage',{
    url:'/firstmessage',
   views:{
     '':{
  templateUrl:'nestedParent.html'
         } ,
    'firstHtml@firstmessage':{
templateUrl:'firstNestedHtml.html'
    },
    'secondHtml@firstmessage':{
templateUrl:'secondNestedHtml.html'
    }
 }
}).
state('SecondMessage',{
    url:"/SecondMessage",
    template:'<strong>SecondM template</strong>'

})
.state('root',{
    url:'/',
    template:"<strong>Welcome to home</strong>"
    
})
.state('otherwise',{
    url:'*path',
    template:"No route found"
    
})

}]);
