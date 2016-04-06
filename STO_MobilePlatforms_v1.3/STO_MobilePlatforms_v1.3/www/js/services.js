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
        $http.post(apiBaseUri + "/token", data, {
            headers: { 'Content-Type': "application/x-www-form-urlencoded" }
        }).success(function (response) {
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
        debugger
        $http.post(apiBaseUri + "/service/comment", obj, {
            headers: { 'Content-Type': "application/json" }
        }).success(function (responce) {
        debugger
            deferred.resolve(responce);
        }).error(function (error) {
        debugger
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
})

.service('officeService', ['$q', '$http', function($q, $http) {
      var getAll = function() {
        var deferred = $q.defer();
        $http.get(apiBaseUri + "/office", {
            headers: { 'Content-Type': "application/json" }
          })
          .success(function(response) {
            deferred.resolve(response);
          }).error(function(error) {
            deferred.reject(error);
          });
        return deferred.promise;
      };

      var getMechanics = function(officeId, serviceId) {
        var deferred = $q.defer();
        var url = apiBaseUri + "/office/" + officeId + "/mechanics?servceId=" + serviceId;
        $http.get(url, {
            headers: { 'Content-Type': "application/json" }
          })
          .success(function(response) {
            deferred.resolve(response);
          }).error(function(error) {
            deferred.reject(error);
          });
        return deferred.promise;
      };

      return {
        getAll: getAll,
        getMechanics: getMechanics
      };
    }
])

.service('carService', ['$q', '$http', function($q, $http) {
      var getBrandsAndModels = function() {
        var url = window.location.origin + "/static/cars.json";
        var deferred = $q.defer();
          debugger
        $http.get(url, {
            headers: { 'Content-Type': "application/json" }
          })
          .success(function(response) {
            deferred.resolve(response);
          }).error(function(error) {
            deferred.reject(error);
          });
        return deferred.promise;
      };

      var getYears = function() {
        var years = [2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973, 1972, 1971, 1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963, 1962, 1961, 1960];
        return years;
      };

      var getAll = function() {
        var deferred = $q.defer();
        $http.get(apiBaseUri + "/car", {
            headers: { 'Content-Type': "application/json" }
          })
          .success(function(response) {
            deferred.resolve(response);
          }).error(function(error) {
            deferred.reject(error);
          });
        return deferred.promise;
      };

      var create = function(car) {
        var deferred = $q.defer();
        $http.post(apiBaseUri + "/car", car, {
            headers: { 'Content-Type': "application/json" }
          })
          .success(function(response) {
            deferred.resolve(response);
          }).error(function(error) {
            deferred.reject(error);
          });
        return deferred.promise;
      };

      var remove = function(carId) {
        var deferred = $q.defer();
        $http.delete(apiBaseUri + "/car/" + carId, {
            headers: { 'Content-Type': "application/json" }
          })
          .success(function(response) {
            deferred.resolve(response);
          }).error(function(error) {
            deferred.reject(error);
          });
        return deferred.promise;
      };

      return {
        getBrandsAndModels: getBrandsAndModels,
        getYears: getYears,
        getAll: getAll,
        create: create,
        remove: remove
      };
    }
])


.service('mechanicsordersService', ['$q', '$localStorage', '$http', function($q, $localStorage, $http) {
      var getOrders = function (date) {
        var deferred = $q.defer();
        var url = apiBaseUri + "/order?date=" + date.toISOString();
        $http.get(url, {
          headers: { 'Content-Type': "application/json" }
        }).success(function (responce) {
          deferred.resolve(responce);
        }).error(function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      };

      return {
        getOrders: getOrders
      }
    }
])

.service('orderService', ['$q', '$localStorage', '$http', function ($q, $localStorage, $http) {
        var getTime = function (officeId, serviceId, mechanicId, date) {
            var deferred = $q.defer();
            var url = apiBaseUri + "/order/time?" + "officeId=" + officeId + "&serviceId=" + serviceId + "&date=" + date.toISOString();
            if (mechanicId != null) {
                url += "&mechanicId=" + mechanicId;
            }
            $http.get(url, {
                headers: { 'Content-Type': "application/json" }
            }).success(function (responce) {
                deferred.resolve(responce);
            }).error(function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        var creatOrderSet = function (set) {
            var deferred = $q.defer();
            $http.post(apiBaseUri + "/order", set, {
                headers: { 'Content-Type': "application/json" }
            }).success(function (responce) {
                deferred.resolve(responce);
            }).error(function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        return {
            getTime: getTime,
            creatOrderSet: creatOrderSet
        }
    }
]);