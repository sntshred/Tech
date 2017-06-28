app.config(['routeServiceProvider',function(routeServiceProvider){
    routeServiceProvider.config('http://localhost:50150/get');
}])

app.provider('routeService',function(){
    var baseurl ='';
    this.config = function(url){
        baseurl=url;
    };

this.$get = ["$log","$http",function($log,$http){
var odata={ };
odata.getsum = function(id,a,b){
    return $http({
        url:baseurl+'/'+id+'/'+a+'/'+b,
        method:'GET'
    })
    $log.log(url);
}

return odata;

}];

})