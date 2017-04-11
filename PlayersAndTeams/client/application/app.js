angular.module('app',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/players', {
        templateUrl:'partials/players/_players.html',
        controller:'playerController'
      })
      .when('/teams', {
        templateUrl:'partials/teams/_teams.html',
        controller:'teamController'
      })
      .when('/associations', {
        templateUrl:'partials/associations/_associations.html',
        controller:'associationController'
      })
      .otherwise('/players')
  })
