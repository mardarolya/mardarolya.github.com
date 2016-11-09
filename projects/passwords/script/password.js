var TestPassword;
(function (TestPassword) {
    'use strict';
    var testPassword = angular.module("TestPassword", ["ui.router",
        "TestPassword.StartPage",
        "TestPassword.ListPasswords",
        "TestPassword.EditPasswords"])
        .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('StartPage', {
            url: "/StartPage",
            templateUrl: "views/password-start/password-start.html",
            controller: "startPageApp",
            controllerAs: "c"
        })
            .state('ListPasswords', {
            url: "/ListPasswords",
            templateUrl: "views/password-list/password-list.html",
            controller: "passwordList",
            controllerAs: "c"
        })
            .state('EditPasswords', {
            url: "/EditPasswords?passwordId",
            templateUrl: "views/password-edit/password-edit.html",
            controller: "passwordEdit",
            controllerAs: "c"
        });
        $urlRouterProvider.otherwise('/StartPage');
    });
})(TestPassword || (TestPassword = {}));
