describe('route app',function(){
    var route;

    beforeEach(module('todoApp'));
    beforeEach(inject(function ($route) {
        route = $route;
    }));
    it('route tasks',function(){
        var tasksRoute=route.routes['/tasks'];
        expect(tasksRoute).toBeDefined();
        expect(tasksRoute.controller).toEqual('tasksCtrl');
        expect(tasksRoute.templateUrl).toEqual('./views/tasks.html');
    });
    it('route task/:is',function(){
        var taskRoute=route.routes['/task/:id'];
        expect(taskRoute).toBeDefined();
        expect(taskRoute.controller).toEqual('taskCtrl');
        expect(taskRoute.templateUrl).toEqual('./views/task.html');
    });
    it('route default',function(){
        var defaultRoute=route.routes['null'];
        expect(defaultRoute).toBeDefined();
    });

});