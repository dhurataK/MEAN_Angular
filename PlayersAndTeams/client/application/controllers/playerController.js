angular.module('app')
  .controller('playerController', ['$scope','playerFactory', function($scope, playerFactory) {
      $scope.players = [];

      $scope.getPlayers = function() {
        playerFactory.getPlayers(function(players) {
          $scope.players = players;
        })
      }
      $scope.addPlayer = function() {
        playerFactory.addPlayer($scope.newPlayer, function() {
          $scope.newPlayer = {};
        })
      }
      $scope.removePlayer = function(player) {
        playerFactory.removePlayer(player, function() {
          alert(player.name+" removed");
        })
      }
  }])
