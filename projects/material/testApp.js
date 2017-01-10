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

    var way = "https://api-test-task.decodeapps.io";
    var currentSession = "";

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

    this.getTasks = function(id) {
      console.log(currentSession);
      // console.log('getTask');
       $http.get(way + '/tasks?session=' + currentSession + '&project_id=' + id + '&paging_size=20&paging_offset=10')
            .then(function (data) {
               console.log(data);
            }, function (error) {
               console.log(error);
            });  
    }

    function letsGo(){
      currentSession = getCookie("mySession");      
      if (currentSession) {
        $http.get(way + '/session?session='+currentSession)
            .then(function (data) {

               getInfo(data.data.session);
            }, function (error) {
               console.log(error);
            });   
      } else {
        $http.post(way + '/signup', {"New item":"Tomas New"})
          .then(function (data) {
                  setCookie("mySession", data.data.session);
                  getInfo(data.data.session);
                },
                function (error){
                  console.log(error);
                });

      }
    }

    function getInfo(session) {
      currentSession = session; 
      $http.get(way + '/account?session='+session)
                  .then(
                    function (data) {
                      $scope.currentUser = data.data.Account.username;
                      var photo = document.querySelector(".with-frame img");
                      photo.src = data.data.Account.image_url;
                      
                      $http.get(way + '/projects?session='+session)
                           .then(
                              function (data) {
                                $scope.projects = data.data.projects;
                                $scope.loading = false;
                              },                     
                              function (error) {
                                console.log(error);
                              });  
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