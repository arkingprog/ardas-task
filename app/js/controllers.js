(function(){
    'use strict'
    angular.module('todoApp')
        .controller('tasksCtrl',function($scope,Tasks){
            var tasks=Tasks.getTask();
            tasks.then(function(value){
                $scope.tasks=value.data;
            });
        })
        .controller('taskCtrl',function($scope,$routeParams,Tasks){
        var tasks=Tasks.getTask();
            tasks.then(function(value){
                value.data.forEach(function(item){
                    if(item.id==$routeParams.id) $scope.task=item;
                })
            });
            $scope.updateTask=function(id,name){
                Tasks.updateTask(id,name);
            }
    });
})();
