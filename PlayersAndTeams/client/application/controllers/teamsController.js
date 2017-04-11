angular.module('app')
  .controller('teamController', ['$scope','teamFactory', function($scope, teamFactory) {
  $scope.teams = [];

  // When this controller is loaded, fetch the team list
  $scope.getTeams = function() {
    teamFactory.getTeams(function(teams) {
      $scope.teams = teams;
    })
  }

  // Pass new team info to the teamsFactory
  $scope.addTeam = function() {
    teamFactory.addTeam($scope.newTeam, function() {
      $scope.newTeam = {};
    });
  }
  // Pass $index to teamsFactory to remove
  $scope.removeTeam = function(team) {
    teamFactory.removeTeam(team, function() {
      alert("Team "+team.name+" removed!");
    });
  }
}]);
