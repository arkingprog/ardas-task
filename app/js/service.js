'use strict'
app.factory('Tasks',function($http){
    return {
        getTask: function(){
            var tasks= $http.get('data/tasks.json').success(function(data) {
                return tasks=data;
            });
            return tasks;
        },
        updateTask: function(id,name){
            var res=$http.post('/update',{id:'id',name:'name'}).success(function(data){
                return res=data;
            });
            return res;
        }
    };
});