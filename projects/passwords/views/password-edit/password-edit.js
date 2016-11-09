var TestPassword;
(function (TestPassword) {
    var EditPasswords;
    (function (EditPasswords) {
        'use strict';
        var pList = angular.module("TestPassword.EditPasswords", ["ui.router"]);
        var PasswordEdit = (function () {
            function PasswordEdit($stateParams, $http) {
                var _this = this;
                this.id = $stateParams.passwordId;
                this.http = $http;
                this.http.get("list.json").success(function (data) { return _this.findRecord(data.list); });
            }
            PasswordEdit.prototype.findRecord = function (data) {
                this.list = data;
                for (var i = 0, max = this.list.length; i < max; i++) {
                    if (this.list[i].id == this.id) {
                        this.name = this.list[i].post;
                        this.description = this.list[i].description;
                        this.password = this.list[i].password;
                        break;
                    }
                }
            };
            PasswordEdit.prototype.saveRecord = function () {
                var data = { id: this.id, post: this.name, description: this.description, password: this.password };
                alert("There are must be PUT!");
            };
            return PasswordEdit;
        }());
        pList.controller("passwordEdit", PasswordEdit);
    })(EditPasswords = TestPassword.EditPasswords || (TestPassword.EditPasswords = {}));
})(TestPassword || (TestPassword = {}));
