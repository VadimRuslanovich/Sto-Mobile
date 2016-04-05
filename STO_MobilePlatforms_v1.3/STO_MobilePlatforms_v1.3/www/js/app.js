// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'ngStorage', 'starter.controllers', 'starter.factory', 'starter.services'])

.run(['$rootScope', function ($rootScope, $localStorage) {
    $rootScope.isAuthenticated = false;
    // utility method to convert number to an array of elements
    $rootScope.getNumber = function (num) {
        return new Array(num);
    }
}
])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  
    $httpProvider.interceptors.push('authInterceptorService');

  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
      
  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
            templateUrl: 'templates/browse.html',
            controller: 'BrowseCtrl'
        }
      }
    })
    .state('app.services', {
        url: '/services',
        views: {
            'menuContent': {
                templateUrl: 'templates/services.html',
                controller: 'ServicesCtrl'
            }
        }
    })

  .state('app.single', {
      url: '/services/:serviceId',
      views: {
          'menuContent': {
              templateUrl: 'templates/service.html',
              controller: 'ServiceCtrl'
          }
      }
  })

    .state('app.entry_to_service', {
        url: "/entry_to_service",
        views: {
            'menuContent': {
                templateUrl: "templates/entry_to_service.html",
                controller: 'EntryToServiceCtrl'
            }
        }
    })

 .state('app.home', {
    url: "/home",
    views: {
        'menuContent': {
            templateUrl: "templates/home.html",
            controller: 'HomeCtrl'
        }
    }
})

 .state('app.exspress_help', {
     url: "/exspress_help",
    views: {
        'menuContent': {
            templateUrl: "templates/exspress_help.html",
            controller: 'Exspress_helpCtrl'
        }
    }
})

 .state('app.profile', {
     url: "/profile",
     views: {
         'menuContent': {
             templateUrl: "templates/profile.html"
         }
     }
 })

  $urlRouterProvider.otherwise('/app/home');
});
