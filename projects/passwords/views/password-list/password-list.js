var TestPassword;
(function (TestPassword) {
    var ListPasswords;
    (function (ListPasswords) {
        'use strict';
        var pList = angular.module("TestPassword.ListPasswords", ["ui.router"]);
        var PasswordList = (function () {
            function PasswordList($http) {
                this.http = $http;
                this.loadData();
            }
            PasswordList.prototype.loadData = function () {
                var _this = this;
                this.http.get("list.json").success(function (data) { return _this.list = data.list; });
            };
            PasswordList.prototype.removeItem = function (elem) {
                for (var i = 0, max = this.list.length; i < max; i++) {
                    if (this.list[i].post == elem) {
                        this.list.splice(i, 1);
                        break;
                    }
                }
            };
            return PasswordList;
        }());
        pList.controller("passwordList", PasswordList);
    })(ListPasswords = TestPassword.ListPasswords || (TestPassword.ListPasswords = {}));
})(TestPassword || (TestPassword = {}));
