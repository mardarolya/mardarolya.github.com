var TestPassword;
(function (TestPassword) {
    var StartPage;
    (function (StartPage) {
        'use strict';
        var startPageApp = angular.module("TestPassword.StartPage", ["ui.router"]);
        var StartPageApp = (function () {
            function StartPageApp() {
            }
            return StartPageApp;
        }());
        startPageApp.controller("startPageApp", StartPageApp);
    })(StartPage = TestPassword.StartPage || (TestPassword.StartPage = {}));
})(TestPassword || (TestPassword = {}));
