var testApp = angular.module("TestApp", ["ngMaterial"])
	.run(function(){
		console.log("I am ready");
	});

testApp.controller("taskController", function ($scope, $mdBottomSheet) {
    $scope.projects = [{name:"Private", tasks: 8}, 
                       {name: "Decode", tasks: 25},
                       {name: "Family", tasks: 3},
                       {name: "Cookle", tasks: 13}];
    $scope.currentUser = "Trevor Reyes";
    $scope.tasks = [{date: "Today", names: [{name: "Create a company", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}]}, 
                    {date: "Tomorrow",  names: [{name: "Call in barber shop", description: ""}]},
                    {date: "Friday (09.06.2016)",  names: [{name: "Earn a lot of money", description: ""}, 
                                                   {name: "Go to the shop", description: ""}]},
                    {date: "Suturday (10.06.2016)", names: [{name: "Buy gifts", description: ""}]}, 
                    {date: "Sunday (11.06.2016)",  names: [{name: "Brush teeth", description: ""}]},  
                    {date: "Monday (12.06.2016)",  names: [{name: "Buy a plane tickets", description: ""}, 
                                                   {name: "Fly away to the Thailand", description: ""}]} ];

    $scope.showRightPanel = false; 
    $scope.isOpenTask = false; 
    $scope.isAddProject = false; 
    $scope.isAddTask = false; 

    $scope.panelHeader = "";
    $scope.panelBody = "";

    this.newProject = "";
    this.pageName = "";
    this.newTaskName = "";
    this.newTaskDescription = "";

    this.showPanel = function(page, head, body) {
	  $scope.panelHeader = head;
      $scope.panelBody = body;
      this.pageName = page;
      if (page == 'taskView') {
        $scope.isOpenTask = true; 
        $scope.showRightPanel = true; 
      }

      if (page == 'project') {
        $scope.isAddProject = true; 
        $scope.showRightPanel = true; 
      }

      if (page == 'taskCreate') {
        $scope.isAddTask = true; 
        $scope.showRightPanel = true; 
      }
    }

    this.closePanel = function(){
      $scope.showRightPanel = false; 
      $scope.isOpenTask = false; 
      $scope.isAddProject = false; 
      $scope.isAddTask = false; 
      $scope.panelHeader = "";
      $scope.panelBody = "";

      this.newProject = "";
      this.pageName = "";
      this.newTaskName = "";
      this.newTaskDescription = "";
    }

    this.okPanel = function(){
    	if (this.pageName == 'project') {
    		$scope.projects.push({name: this.newProject, tasks: 0});
    	}

    	if (this.pageName == 'taskCreate') {
    		 $scope.tasks[$scope.tasks.length-1].names.push({name: this.newTaskName, description: this.newTaskDescription});
    	}
    	this.closePanel();
    }
});	