var app = angular.module("myapp", []);
app.controller("twoBinding", ["$scope", "empservice", function ($scope, empservice) {

    $scope.oneway1 = 10;
    $scope.oneway2 = 20;

    empservice.getEmployee(result)
    
    function result(res) {
        $scope.Employees = res;
    }

}]);


app.service("empservice", ["$http", "$log", function ($http, $log) {
    this.getEmployee = function (cb) {
        $http({
            url: "http://localhost:50150/get",
            method: "GET"
        }).
            then(function (resp) {
                $log.log("then area");
                $log.log(resp.data);
                
                cb(resp.data);

            }, function (resp) {
                $log.log("Error cocoured");

            })

    }

}]);

app.directive("empDetails", function () {
    return {
        templateUrl: "templateRepeater.html"
    }
})


