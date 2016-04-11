describe('taskCtrl',function(){
    beforeEach(module('todoApp'));

    var controller,scope;
    beforeEach(inject(function($rootScope,$controller){
        scope=$rootScope.$new();
        scope.task={
                "id": 1,
                "name": "Today_task1",
                "creation_date": "2015-04-21T06:50:21",
                "due_date": "2015-04-22T23:59:00",
                "start_date": "2015-04-21T00:00:01",
                "is_completed": false,
                "is_archived": false,
                "estimated_effort": 5.5,
                "actual_effort": 3.3,
                "physical_progress": 60,
                "obj_status": "active",
                "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
                "project_id": 0
            }
        controller = $controller('taskCtrl', { $scope: scope });
    }));

    it('$scope.editable',function(){
        scope.editable();
        expect(scope.isEditableTask).toEqual(true);
    });
    it('$scope.cancel',function(){
        scope.editable();
        scope.cancel();
        expect(scope.isEditableTask).toEqual(false);
    });
});