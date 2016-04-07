(function(){
    'use strict'
    angular.module('todoApp',['ngRoute',"xeditable"])
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
        .run(function(editableOptions) {
            editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    });
})();
