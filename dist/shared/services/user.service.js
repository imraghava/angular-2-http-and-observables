"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var observable_1 = require("rxjs/observable");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = 'https://reqres.in/api/users';
    }
    /**
     * Get all users
     */
    UserService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl)
            .map(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    /**
     * Get a single user
     */
    UserService.prototype.getUser = function () {
        return this.http.get('http://example.com')
            .map(function (res) { return res.json.data; })
            .catch(this.handleError);
    };
    /**
     * Hanlde any errors from the API
     */
    UserService.prototype.handleError = function (err) {
        var errMessage;
        if (err instanceof http_1.Response) {
            var body = err.json() || '';
            var error = body.error || JSON.stringify(body);
            errMessage = err.status + " - " + err.statusText + " || ''} " + error;
        }
        else {
            errMessage = err.message ? err.message : err.toString();
        }
        return observable_1.Observable.throw(errMessage);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map