(function(){
    'use strict'
    angular.module('todoApp',['ngRoute'])
        .config(function($routeProvider){
            $routeProvider
                .when('/tasks',
                    {
                        templateUrl:'./views/tasks.html',
                        controller:'tasksCtrl'
                    })
                .when('/task/:id',
                    {
                        templateUrl:'./views/task.html',
                        controller:'taskCtrl'
                    })
                .otherwise({
                    redirectTo:'/tasks'
                });
        })

})();
