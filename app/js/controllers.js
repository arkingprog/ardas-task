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
            var tmpName='';

            $scope.isEditableTask=false;

            $scope.editable=function(){
                $scope.isEditableTask=!$scope.isEditableTask;
                tmpName=$scope.task.name;
            };

            $scope.cancel=function(){
                $scope.isEditableTask=!$scope.isEditableTask;
                $scope.task.name=tmpName;
            };

            $scope.updateTask=function(){
                $scope.isEditableTask=!$scope.isEditableTask;
                Tasks.updateTask($scope.task.id,$scope.task.name);
            };

            var tasks=Tasks.getTask();

            tasks.then(function(value){
                value.data.forEach(function(item){
                    if(item.id==$routeParams.id) $scope.task=item;
                })
            });


    });
})();

