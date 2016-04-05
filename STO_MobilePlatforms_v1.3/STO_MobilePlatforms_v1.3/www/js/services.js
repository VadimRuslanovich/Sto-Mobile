var apiBaseUri = "http://localhost:9400/api";

angular.module('starter.services', [])
.service('authenticationService', function ($q, $localStorage, $http) {
    var authStatus = {
        isAuth: false,
        email: null,
        role: null,
        token: null
    };

    var login = function (email, password) {
        logout();
        var data = "grant_type=password" +
          "&username=" + email.toLowerCase() +
          "&password=" + password;
        var deferred = $q.defer();
        debugger
        $http.post(apiBaseUri + "/token", data, {
            headers: { 'Content-Type': "application/x-www-form-urlencoded" }
        }).success(function (response) {
            debugger
            authStatus.isAuth = true;
            authStatus.email = email;
            authStatus.token = response.access_token;
            authStatus.role = response.role;
            $localStorage.authStatus = authStatus;
            debugger
            deferred.resolve();
        }).error(function (error) {
            debugger
            logout();
            deferred.reject(error);
        });
        return deferred.promise;
    };

    var register = function (userInfo) {
        var deferred = $q.defer();
        debugger
        $http.post(apiBaseUri + "/signup", userInfo, {
            headers: { 'Content-Type': "application/json" }
        })
          .success(function () {
              debugger
              deferred.resolve();
          }).error(function (error) {
              debugger
              logout();
              deferred.reject(error);
          });
        return deferred.promise;
    };

    var logout = function () {
        authStatus.isAuth = false;
        authStatus.email = null;
        authStatus.token = null;
        authStatus.role = null;
        delete $localStorage.authStatus;
    };

    var getStatus = function () {
        return $localStorage.authStatus;
    };

    return {
        register: register,
        login: login,
        logout: logout,
        getStatus: getStatus
    };
})

.service("servicesService", function ($q, $http) {

    var getAllServices = function () {
        var deferred = $q.defer();
        $http.get(apiBaseUri + "/service", {
            headers: { 'Content-Type': "application/json" }
        }).success(function (responce) {
            deferred.resolve(responce);
        }).error(function (error) {
            deferred.reject(error.message);
        });
        return deferred.promise;
    };

    var getSpareParts = function (id) {
        var deferred = $q.defer();
        var url = apiBaseUri + "/service/" + id + "/spareparts";
        $http.get(url, {
            headers: { 'Content-Type': "application/json" }
        }).success(function (responce) {
            deferred.resolve(responce);
        }).error(function (error) {
            deferred.reject(error.message);
        });
        return deferred.promise;
    };

    var getService = function (serviceId) {
        var deferred = $q.defer();
        $http.get(apiBaseUri + "/service/" + serviceId, {
            headers: { 'Content-Type': "application/json" }
        }).success(function (responce) {
            deferred.resolve(responce);
        }).error(function (error) {
            deferred.reject(error.message);
        });
        return deferred.promise;
    };

    var submitPost = function (post, serviceId) {
        var obj = {};
        obj.value = post;
        obj.serviceId = serviceId;

        var deferred = $q.defer();
        $http.post(apiBaseUri + "/service/comment", obj, {
            headers: { 'Content-Type': "application/json" }
        }).success(function (responce) {
            deferred.resolve(responce);
        }).error(function (error) {
            deferred.reject(error.message);
        });
        return deferred.promise;
    };

    return {
        getAllServices: getAllServices,
        getSpareParts: getSpareParts,
        getService: getService,
        submitPost: submitPost
    };
});