angular.module('starter.factory', [])
.factory('StorageService', function ($localStorage) {

    $localStorage = $localStorage.$default({
        user: [],
        cart: []
    });

    var _getUser = function () {
        return $localStorage.user;
    };

    var addUser = function (user) {
        $localStorage.user.push(user);
    }

    var addToCart = function (thing) {
        $localStorage.user.push(user);
    }


    var remove = function (thing) {
        $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
    }

    return {
        getAll: _getAll,
        add: _add,
        remove: _remove
    };
})

.factory('authInterceptorService', ['$location', '$localStorage', function ($location, $localStorage) {
      var authInterceptorServiceFactory = {};
      var authStatus = undefined;

      var request = function (config) {
          config.headers = config.headers || {};
          authStatus = $localStorage.authStatus;
          if ((angular.isUndefined($localStorage.authStatus)) || (angular.isDefined($localStorage.authStatus) && angular.isUndefined($localStorage.authStatus.token))) {
              //$location.path("app/home");
              delete $localStorage.authStatus;
          }
          if (authStatus && authStatus.isAuth) {
              config.headers.Authorization = "Bearer " + authStatus.token;
          }
          return config;
      };

      var response = function (response) {
          return response;
      };

      authInterceptorServiceFactory.request = request;
      authInterceptorServiceFactory.response = response;

      return authInterceptorServiceFactory;
  }
]);