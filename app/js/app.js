'use strict'
var app=angular.module('todoApp',['ngRoute',"xeditable"]);

app.config(function($routeProvider){
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
});

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});