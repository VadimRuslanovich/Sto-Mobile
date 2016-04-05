angular.module('starter.controllers', ['starter.factory', 'starter.services'])

.controller('AppCtrl', ['$rootScope', '$scope', '$ionicModal', '$timeout', '$window', 'authenticationService', '$location', '$ionicPopup',
  function ($rootScope, $scope, $ionicModal, $timeout, $window, authenticationService, $location, $ionicPopup) {
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
                  debugger
                  authenticationService.login($scope.user.Login, $scope.user.Password).then(function () {
                      $scope.modal.hide();
                      debugger
                      //$window.location.reload();
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
                  debugger
                  authenticationService.register($scope.user).then(function () {
                      debugger
                      loginAction();
                  }, function (error) {
                      debugger
                      $scope.isProcess = false;
                      $rootScope.isAuthenticated = false;
                  });
              }
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

.controller('ServicesCtrl', function ($scope, servicesService) {
    servicesService.getAllServices().then(function (services) {
        $scope.services = services;
    }, function (message) {
    });
})

.controller('ServiceCtrl', ['$scope', '$http', '$stateParams', 'servicesService', '$rootScope',
    function ($scope, $http, $stateParams, servicesService, $rootScope) {
        $scope.data = {};
        $scope.id = $stateParams.serviceId;
        var serviceId = $scope.id;
        servicesService.getService($scope.id).then(function (service) {
            $scope.data = service;
            //debugger
        }, function (message) {
            //debugger
        });

        $scope.submitPost = function (serviceId) {
            servicesService.submitPost($scope.post, serviceId).then(function (comment) {
                debugger
                $scope.service.Comments.push(comment);
                debugger
                $scope.post = "";
            }, function (message) {

            });
        };

        $scope.postIsNotEmpty = function () {
            var isEmpty = /\S/.test($scope.post);
            return !isEmpty;
        };
}])


 .controller('Map1Ctrl', function($scope, $ionicLoading, $compile, $ionicPlatform) {
        function initialize() {
            var myLatlng = new google.maps.LatLng(43.07493,-80.381388);
        
            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"),
                mapOptions);
        
            //Marker + infowindow + angularjs compiled ng-click
            var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
            var compiled = $compile(contentString)($scope);

            var infowindow = new google.maps.InfoWindow({
                content: compiled[0]
            });

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'Uluru (Ayers Rock)'
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });

            $scope.map = map;
        }
        google.maps.event.addDomListener(window, 'load', initialize);
      
        $scope.centerOnMe = function() {
            if(!$scope.map) {
                return;
            }

            $scope.loading = $ionicLoading.show({
                content: 'Getting current location...',
                showBackdrop: false
            });

            navigator.geolocation.getCurrentPosition(function(pos) {
                $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                $scope.loading.hide();
            }, function(error) {
                alert('Unable to get location: ' + error.message);
            });
        };
      
        $scope.clickTest = function() {
            alert('Example of infowindow with ng-click')
        };      
 })


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
});
