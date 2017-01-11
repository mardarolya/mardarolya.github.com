var testApp = angular.module("TestApp", ["ngMaterial"])
  .controller("taskController", ["$scope", "$http", function ($scope, $http) {

    // $scope.projects = [{name:"Private", tasks: 8}, 
    //                    {name: "Decode", tasks: 25},
    //                    {name: "Family", tasks: 3},
    //                    {name: "Cookle", tasks: 13}];
    // $scope.currentUser = "Trevor Reyes";
    // $scope.tasks = [{date: "Today", names: [{name: "Create a company", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}]}, 
    //                 {date: "Tomorrow",  names: [{name: "Call in barber shop", description: ""}]},
    //                 {date: "Friday (09.06.2016)",  names: [{name: "Earn a lot of money", description: ""}, 
    //                                                {name: "Go to the shop", description: ""}]},
    //                 {date: "Suturday (10.06.2016)", names: [{name: "Buy gifts", description: ""}]}, 
    //                 {date: "Sunday (11.06.2016)",  names: [{name: "Brush teeth", description: ""}]},  
    //                 {date: "Monday (12.06.2016)",  names: [{name: "Buy a plane tickets", description: ""}, 
    //                                                {name: "Fly away to the Thailand", description: ""}]} ];
    $scope.tasks = [{date: "Today", names: []}];
    $scope.showRightPanel = false; 
    $scope.isOpenTask = false; 
    $scope.isAddProject = false; 
    $scope.isEditProject = false; 
    $scope.isAddTask = false; 

    $scope.panelHeader = "";
    $scope.panelBody = "";

    this.newProject = "";
    this.pageName = "";
    this.newTaskName = "";
    this.newTaskDescription = "";
    this.searchTask = "";

    var way = "https://api-test-task.decodeapps.io";
    var currentSession = "";
    var currentId = 0;
    var currentTask = 0;

    this.showPanel = function(page, head, body, id) {

	    $scope.panelHeader = head;
      $scope.panelBody = body;
      this.pageName = page;
      if (page == 'taskView') {
        $scope.isOpenTask = true; 
        $scope.showRightPanel = true; 
        currentTask = parseInt(id);
      }

      if (page == 'project') {
        $scope.isAddProject = true; 
        $scope.showRightPanel = true; 
      }

      if (page == 'projectEdit') {
        $scope.isEditProject = true; 
        $scope.showRightPanel = true;
        for (var ii = 0, maxii = $scope.projects.length; ii < maxii; ii++) {
          if ($scope.projects[ii].Project.id == currentId) {
            this.newProject = $scope.projects[ii].Project.title;
            break;
          }
        } 
        
      }

      if (page == 'taskCreate') {
        $scope.isAddTask = true; 
        $scope.showRightPanel = true; 
      }

      if (page == 'taskEdit') {
        $scope.isAddTask = true; 
        $scope.showRightPanel = true; 
        $scope.isOpenTask = false;
        this.newTaskName = head;
        this.newTaskDescription = body;
        $scope.panelHeader = "Edit task";
        $scope.panelBody = "";
      }
    }

    this.closePanel = function(){
      close();
    }

    function close() {
      $scope.showRightPanel = false; 
      $scope.isOpenTask = false; 
      $scope.isAddProject = false; 
      $scope.isAddTask = false; 
      $scope.isEditProject = false; 
      $scope.panelHeader = "";
      $scope.panelBody = "";

      this.newProject = "";
      this.pageName = "";
      this.newTaskName = "";
      this.newTaskDescription = "";
      currentTask = 0;
    }

    this.okPanel = function(){
    	if (this.pageName == 'project') {
    		// $scope.projects.push({name: this.newProject, tasks: 0});
        $http.post(way + '/projects/project', {"session": currentSession, "Project": {"title": this.newProject}})
          .then(function (data) {
                  getProgects(currentSession);
                },
                function (error){
                  console.log(error);
                });
    	}

      if (this.pageName == 'projectEdit') {
        var body = {"session": currentSession, 
                    "Project": {
                      "id": currentId,
                      "title": this.newProject
                      }
                    };
        $http.post(way + '/projects/project', body)
          .then(function (data) {
                  getProgects(currentSession);
                },
                function (error){
                  console.log(error);
                });
      }

    	if (this.pageName == 'taskCreate') {
    		 // $scope.tasks[$scope.tasks.length-1].names.push({name: this.newTaskName, description: this.newTaskDescription});
    	   var body = {
                      "session": currentSession,
                      "Project": {
                        "id": currentId
                      },
                      "Task": {
                        "title": this.newTaskName,
                        "description": this.newTaskDescription                      
                      }
                  };
         $http.post(way + '/tasks/task', body)
          .then(function (data) {
                  getProgects(currentSession);
                },
                function (error){
                  console.log(error);
                });
      }

      if (this.pageName == 'taskEdit') {
         // $scope.tasks[$scope.tasks.length-1].names.push({name: this.newTaskName, description: this.newTaskDescription});
         var body = {
                      "session": currentSession,
                      "Project": {
                        "id": currentId
                      },
                      "Task": {
                        "id" : currentTask,
                        "title": this.newTaskName,
                        "description": this.newTaskDescription                      
                      }
                  };
         $http.post(way + '/tasks/task', body)
          .then(function (data) {
                  getProgects(currentSession);
                },
                function (error){
                  console.log(error);
                });
      }
    	this.closePanel();
    }

    this.getTasks = function(id) {
      getProjectTasks(id);
    }

    this.taskDone = function(id) {
      var body = {
        "session": currentSession,
        "Task": {
          "id": id
        }
      }
      $http.post(way + '/tasks/task/complite', body)
          .then(function (data) {
                  getProgects(currentSession) 
                },
                function (error){
                  console.log(error);
                });
    }

    this.taskDelete = function() {
      if (currentTask != 0) {
        $http.delete(way + '/tasks/task?session='+currentSession+'&task_id='+currentTask)
           .then(
              function () {
                close();
                getProgects(currentSession);
              },                     
              function (error) {
                console.log(error);
              });  
      }
    }

    this.deleteProject = function(){
      if (currentId != 0) {
        $http.delete(way + '/projects/project?session='+currentSession+'&project_id='+currentId)
           .then(
              function () {
                close();
                currentId = 0;
                getProgects(currentSession);
              },                     
              function (error) {
                console.log(error);
              });  
      }
    }

    function letsGo(){
      currentSession = getCookie("mySession");      
      if (currentSession) {
        $http.get(way + '/session?session='+currentSession)
            .then(function (data) {
               getInfo(currentSession);
            }, function (error) {
               postUser();
            });   
      } else {
        postUser();
      }
    }

    function postUser() {
      $http.post(way + '/signup', {"New item":""})
          .then(function (data) {
                  setCookie("mySession", data.data.session);
                  getInfo(data.data.session);
                },
                function (error){
                  console.log(error);
                });
    }

    function getInfo(session) {
      currentSession = session; 
      $http.get(way + '/account?session='+session)
                  .then(
                    function (data) {
                      $scope.currentUser = data.data.Account.username;
                      var photo = document.querySelector(".with-frame img");
                      photo.src = data.data.Account.image_url;
                      getProgects(session);
                    },
                    function (error) {
                      console.log(error);
                    });      
    }

    function getProgects(session) {
      $http.get(way + '/projects?session='+session)
           .then(
              function (data) {
                $scope.projects = data.data.projects;
                $scope.loading = false;
                if (currentId == 0) {
                  currentId = $scope.projects[0].Project.id;
                }
                getProjectTasks(currentId);
              },                     
              function (error) {
                console.log(error);
              });  
    }

    function getProjectTasks(id) {
      currentId = id; 
      $http.get(way + '/tasks?session=' + currentSession + '&project_id=' + id + '&paging_size=20&paging_offset=0')
            .then(function (data) {
               var tasks = data.data.tasks;
               var dtParts = [];
               $scope.tasks = [];
               for(var i = 0, max = tasks.length; i < max; i++) {
                 dtParts = ((tasks[i].Task.created_at).split(" ")[0]).split("-");
                 var date = dtParts[2] + "." + dtParts[1] + "." +dtParts[0];
                 var done = false;
                 for (var k = 0, maxk = $scope.tasks.length; k < maxk; k ++) {
                  if ($scope.tasks[k].date == date) {
                    $scope.tasks[k].names.push({name: tasks[i].Task.title,
                                                description: tasks[i].Task.description,
                                                id: tasks[i].Task.id});
                    done = true;
                    break;
                  } 
                 }

                 if (done == false) {
                  $scope.tasks.push({date: date, names: [{name: tasks[i].Task.title,
                                                          description: tasks[i].Task.description,
                                                          id: tasks[i].Task.id}]});
                 }
               }

               for (var j = 0, maxj = $scope.tasks.length; j < maxj; j ++) {
                  dtParts = $scope.tasks[j].date.split(".");
                  var dt = new Date(),
                      dtTask = new Date(parseInt(dtParts[2]), parseInt(dtParts[1]-1), parseInt(dtParts[0])),
                      d = dt.getDate(),
                      m = dt.getMonth(),
                      y = dt.getFullYear(),
                      nameWeekDay = "";
                  
                  if (d == parseInt(dtParts[0]) && m == (parseInt(dtParts[1]) - 1) && y == parseInt(dtParts[2])) {
                    $scope.tasks[j].date = "Today";
                  } else if ((d == parseInt(dtParts[0]) + 1) && m == (parseInt(dtParts[1]) - 1) && y == parseInt(dtParts[2])) {
                    $scope.tasks[j].date = "Tomorrow";
                  } else {
                    var weekDay = dtTask.getDay();
                    var nameWeekDay = "";
                    switch(weekDay) {
                      case 0: 
                        nameWeekDay = "Sunday"
                        break
                      case 1: 
                        nameWeekDay = "Monday"
                        break
                      case 2: 
                        nameWeekDay = "Tuesday"
                        break
                      case 3: 
                        nameWeekDay = "Wednesday"
                        break
                      case 4: 
                        nameWeekDay = "Thursday"
                        break
                      case 5: 
                        nameWeekDay = "Friday"
                        break
                      case 6: 
                        nameWeekDay = "Saturday"
                        break 
                      default: 
                        nameWeekDay = "";   
                    }
                    $scope.tasks[j].date = nameWeekDay + " (" + $scope.tasks[j].date + ")";
                  }
                }
                var oldEl = document.querySelector(".item-project .active");
                if (oldEl) {
                  oldEl.classList.remove("active");  
                }   
                var newEl = document.querySelector(".item-project #id_"+currentId);
                if (newEl) {
                  newEl.classList.add("active");  
                } 
            },              
            function (error) {
               console.log(error);
            });  
    }

    function getCookie(name) {
      var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function setCookie(name, value, options) {
      options = options || {};

      var expires = options.expires;

      if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
      }
      if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
      }

      value = encodeURIComponent(value);

      var updatedCookie = name + "=" + value;

      for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
          updatedCookie += "=" + propValue;
        }
      }

      document.cookie = updatedCookie;
    }

    angular.element(document).ready(function () {
      $scope.loading = true;
      letsGo();
    });
}])
  .run(function(){
    console.log("I am ready");        
  })