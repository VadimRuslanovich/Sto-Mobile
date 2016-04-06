angular.module('starter.controllers', ['starter.factory', 'starter.services'])

.controller('AppCtrl', ['$rootScope', '$scope', '$ionicModal', '$timeout', '$window', 'authenticationService', '$location', '$ionicPopup', '$localStorage',
  function ($rootScope, $scope, $ionicModal, $timeout, $window, authenticationService, $location, $ionicPopup, $localStorage) {
      $rootScope.$on('showLoginModal', function ($event, scope, cancelCallback, callback) {
          $scope.user = {};
          $scope.isProcess = false;

          $scope = scope || $scope;
          $scope.viewLogin = true;
          $ionicModal.fromTemplateUrl('templates/login.html', {
              scope: $scope
          }).then(function (modal) {
              $scope.modal = modal;
              $scope.modal.show();
              $scope.switchTab = function (tab) {
                  if (tab === 'login') {
                      $scope.viewLogin = true;
                  } else {
                      $scope.viewLogin = false;
                  }
              }
              $scope.hide = function () {
                  $scope.modal.hide();
                  if (typeof cancelCallback === 'function') {
                      cancelCallback();
                  }
              }
              var errorPopup = function (template) {
                  $ionicPopup.alert({
                      title: 'Error!',
                      template: template
                  });
              }

              var loginAction = function (parameters) {
                  var user = $scope.user;
                  authenticationService.login($scope.user.Login, $scope.user.Password).then(function () {
                      $scope.modal.hide();
                      //debugger
                      $rootScope.isAuthenticated = true;
                      if (typeof callback === 'function') {
                          callback();
                      }
                  }, function (error) {
                      debugger
                      if (error.error && error.error_description) {
                          errorPopup('Code: ' + error.error + ' </br>' + 'Desc: ' + error.error_description);
                      } else {
                          errorPopup('No connection to server!' + '</br>' + error.code);
                      }
                      $scope.isProcess = false;
                      $rootScope.isAuthenticated = false;
                  });
              }

              $scope.login = function () {
                  $scope.isProcess = true;
                  loginAction();
              };

              $scope.register = function () {
                  $scope.isProcess = true;
                  var user = $scope.user;
                  authenticationService.register($scope.user).then(function () {
                      debugger
                      loginAction();
                  }, function (error) {
                      debugger
                      $scope.isProcess = false;
                      $rootScope.isAuthenticated = false;
                  });
              }

              $scope.checkRole = function (role) {
                  var authStatus = $localStorage.authStatus;
                  //debugger
                  if ((authStatus == null || !authStatus.isAuth) && role == null) {
                      return false;
                  }
                  if (authStatus != null && authStatus.isAuth && authStatus.role === role) {
                      return true;
                  }
                  return false;
              };
          });
      });

      $rootScope.loginFromMenu = function () {
          $rootScope.$broadcast('showLoginModal', $scope, null, null);
      }
      $rootScope.logout = function () {
          authenticationService.logout();
          $rootScope.isAuthenticated = false;
          $location.path('/app/home');
      }

}])

.controller( 'BrowseCtrl', function ($scope, StorageService) {
  $scope.things = StorageService.getAll();

  $scope.add = function (newThing) {
    StorageService.add(newThing);
  };

  $scope.remove = function (thing) {
    StorageService.remove(thing);
  };
})


.controller('HomeCtrl', function ($scope) {
})



.controller('EntryToServiceCtrl', function ($scope) {

})



.controller('Exspress_helpCtrl', function ($scope) {
})

.controller('OrdersCtrl', ['$scope', '$stateParams', '$rootScope', 'mechanicsordersService',
    function ($scope, $stateParams, $rootScope, mechanicsordersService) {
    
        $scope.dateChange = function (date) {
        mechanicsordersService.getOrders(date).then(function (result) {
            $scope.orders = result;
        }, function (error) {
        });
      };

      $scope.selectedDate = new Date();
      $scope.dateChange($scope.selectedDate);
}])

.controller('ProfileCtrl', ['$scope', '$http', '$stateParams', 'authenticationService', '$rootScope',
    function ($scope, $http, $stateParams, authenticationService, $rootScope) {
        $scope.authSatus = authenticationService.getStatus;
}])


.controller('ServicesCtrl', function ($scope, servicesService) {
    servicesService.getAllServices().then(function (services) {
        $scope.services = services;
    }, function (message) {
    });
})

.controller('ServiceCtrl', ['$scope', '$http', '$stateParams', 'servicesService', '$rootScope', '$location',
    function ($scope, $http, $stateParams, servicesService, $rootScope, $location) {
        $scope.data = {};
        $scope.id = $stateParams.serviceId;
        var serviceId = $scope.id;
        servicesService.getService($scope.id).then(function (service) {
            $scope.data = service;
            //debugger
        }, function (message) {
            //debugger
        });

        $scope.submitPost = function (serviceId, post) {
            debugger
            servicesService.submitPost(post, serviceId).then(function (comment) {
                $scope.service.Comments.push(comment);
                $scope.post = "";
                debugger
                $location.path('/app/services');
            }, function (message) {
                debugger

                $location.path('/app/services');
            });
        };

        /*$scope.postIsNotEmpty = function (post) {
            var isEmpty = /\S/.test(post);
            return !isEmpty;
        };*/
}])


.controller('MapCtrl', function ($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform, $http) {
    $ionicPlatform.ready(function() { 
        $ionicLoading.show({
            template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
        });

        var posOptions = {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
        };

        $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;

            var myLatlng = new google.maps.LatLng(lat, long);

            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'My Location'
            });
            $scope.map = map;
            $ionicLoading.hide();

        }, function (err) {
            $ionicLoading.hide();
            console.log(err);
        });

        $scope.centerOnMe = function () {
            if (!$scope.map) {
                return;
            }

            $scope.loading = $ionicLoading.show({
                content: 'Getting current location...',
                showBackdrop: false
            });

            $cordovaGeolocation.getCurrentPosition(function (pos) {
                $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                $scope.loading.hide();
            }, function (error) {
                alert('Unable to get location: ' + error.message);
            });
        };
    })
})


.controller('orderController', ['$scope', '$q', 'orderService', 'servicesService', 'carService', 'officeService',
    function ($scope, $q, orderService, servicesService, carService, officeService) {
      var getNewOrder = function (number) {
        return {
          number: number, CarId: null, ServiceId: null, MechanicId: null, Date: null, isMechanicAutoSelect: true, Time: null, spareParts: {
            isAutoSelection: false, useAllMyDetails: false
          }
        };
      }
      $scope.orders = [getNewOrder(1)];

      // StartUp initialization
      $q.all({
        cars: carService.getAll(),
        carsInfo: carService.getBrandsAndModels(),
        services: servicesService.getAllServices(),
        offices: officeService.getAll()
      }).then(function (results) {
        $scope.cars = results.cars;
        $scope.brandsAndModel = results.carsInfo;
        $scope.years = carService.getYears();
        $scope.services = results.services;
        $scope.offices = results.offices;
      }, function (error) {
        
      });


      // ORDER ACTIONS  
      $scope.addNewOrder = function () {
        $scope.orders.unshift(getNewOrder($scope.orders.length + 1));
      };

      $scope.removeOrder = function (number) {
        var i;
        for (i = 0; i < $scope.orders.length; i++)
          if ($scope.orders[i].number === number) {
            $scope.orders.splice(i, 1);
            break;
          }

        for (i = $scope.orders.length - 1; i >= 0; i--)
          $scope.orders[i].number = $scope.orders.length - i;

        if ($scope.orderNumberWithNewCarWindowOpened === number)
          $scope.orderNumberWithNewCarWindowOpened = null;
      };

      $scope.addNewCar = function (orderNumber) {
        $scope.orderNumberWithNewCarWindowOpened = orderNumber;
      };

      var getMechanicsRequest = function (orderNumber) {
        var order = $scope.orders.filter(function (x) { return x.number === parseInt(orderNumber) })[0];
        if (order.OfficeId == null || order.OfficeId === "" || order.ServiceId == null || order.ServiceId === "") {
          order.mechanicsArray = [];
          return;
        }

        officeService.getMechanics(order.OfficeId, order.ServiceId).then(function (responce) {
          order.mechanicsArray = responce;
        }, function (error) {

        });
      };

      $scope.officeChange = function (orderNumber) {
        getMechanicsRequest(orderNumber);
      };

      $scope.serviceChange = function (orderNumber) {
        var order = $scope.orders.filter(function (x) { return x.number === parseInt(orderNumber) })[0];
        getMechanicsRequest(orderNumber);
        servicesService.getSpareParts(order.ServiceId).then(function (responce) {
          order.spareParts.data = responce;
        }, function(error) {
          
        });
      };

      $scope.detailManagementHide = function (orderNumber) {
        var order = $scope.orders.filter(function (x) { return x.number === parseInt(orderNumber) })[0];
        return order.spareParts.data == null || order.spareParts.data.length < 1;
      };

      $scope.createOrderSet = function () {
        var getSparePartIds = function(parts) {
          if (parts == null || parts.useAllMyDetails || parts.data == null || parts.data.length === 0) {
            return [];
          }

          var ids = [];
          for (var j = 0; j < parts.data.length; j++) {
            var part = parts.data[j];
            if (part.selected !== "-1") {
              ids.push(parseInt(part.selected));
            }
          }

          return ids;
        };

        var ordersRequestBody = [];
        for (var i = 0; i < $scope.orders.length; i++) {
          var order = $scope.orders[i];
          ordersRequestBody.push({
            Date: new Date(order.Date.getTime() + ((-1) * order.Date.getTimezoneOffset() * 60000)).toISOString(),
            Time: order.Time,
            MechanicId: order.MechanicId,
            ServiceId: order.ServiceId,
            CarId: order.CarId,
            SpareParts: getSparePartIds(order.spareParts),
            OfficeId: order.OfficeId
          });
        }

        orderService.creatOrderSet(ordersRequestBody).then(function() {
          $scope.orders = [getNewOrder(1)];
          $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.body))
            .clickOutsideToClose(true)
            .title("Complete")
            .textContent("All orders were created successfully.")
            .ok("Ok")
          );
        }, function(error) {
          
        });
      };

      // CAR ACTIONS
      $scope.newCar = {};

      $scope.brandChanged = function(brand) {
        $scope.models = $scope.brandsAndModel.filter(function(x) { return x.Brand === brand })[0].Models;
      };

      $scope.orderNumberWithNewCarWindowOpened = null;
      $scope.showNewCarWindow = function (orderNumber) {
        return $scope.orderNumberWithNewCarWindowOpened === orderNumber;
      };

      $scope.createNewCar = function () {
        $scope.isCarProcess = true;
        carService.create($scope.newCar).then(function(car) {
          $scope.cars.push(car);
          $scope.isCarProcess = false;
          $scope.cancelNewCar();
        }, function (error) {
          
        });
      };

      $scope.cancelNewCar = function () {
        $scope.orderNumberWithNewCarWindowOpened = null;
        $scope.newCar = {};
      };

      // Details management
      $scope.orderFilter = function(order) {
        return order.number === $scope.openOrderDetailManagement;
      };

      $scope.detailManagementOpen = function(orderId) {
        $scope.openOrderDetailManagement = orderId;
        $mdDialog.show({
          scope: $scope.$new(),
          templateUrl: "/sto/order/detail.manangement.dialog.html",
          parent: angular.element(document.getElementById("mainElement")),
          clickOutsideToClose: true
        });

      };

      $scope.detailManageOk = function() {
        $mdDialog.hide();
      };


      // Date Picker
      $scope.minDate = new Date();

      $scope.dateChange = function (date, mechanicId, isAuto, officeId, serviceId, orderId) {
        var order = $scope.orders.filter(function (x) { return x.number === parseInt(orderId) })[0];
        var mechanicIdResult = (isAuto || mechanicId == null || mechanicId === "") ? null : mechanicId;
        orderService.getTime(officeId, serviceId, mechanicIdResult, date).then(function (result) {
          order.timeArray = result;
        }, function(error) {

        });
      };

    }
  ]);

