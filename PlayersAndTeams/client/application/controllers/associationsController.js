angular.module('app')
  .controller('associationController', ['$scope','playerFactory','teamFactory', function($scope,playerFactory,teamFactory) {

      $scope.players = [];
       $scope.teams = [];

       //When this controller is loaded, fetch the player list
       playerFactory.getPlayers(function(players){
          $scope.players = players;
       })

       //When this controller is loaded, fetch the team list
       teamFactory.getTeams(function(teams){
          $scope.teams = teams;
       })

       //Pass the player index and team name to create association
       $scope.addPlayerToTeam = function(){
          playerFactory.addPlayerToTeam($scope.newAssoc);
       }

       //Pass $index to PlayerFactory to remove the player's team
       $scope.removePlayerFromTeam = function($index){
          playerFactory.removePlayerFromTeam($index);
       }
}]);
