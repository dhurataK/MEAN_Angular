angular.module('app')
  .factory('playerFactory', [function() {
    var factory = {};

    factory.players = [
        {"name": "Jason", "team":"Lakers"},
        {"name":"Dhurata","team":"Arsenal"},
        {"name":"Erblina","team":"Bayern"}
    ]
    factory.getPlayers = function(callback) {
      callback(factory.players);
    }
    factory.addPlayer = function(player, callback) {
      // console.log("Player added in factory",player);
      player.team = "";
      factory.players.push(player)
      callback()
    }
    factory.removePlayer = function(player, callback) {
      // console.log("removing ", player);
      for (var i = 0; i < factory.players.length; i++) {
        if(factory.players[i] == player){
          // console.log("Deleted "+team.name);
          factory.players.splice(i, 1);
          break;
        }
      }
      callback()
    }
    //Set a player's team name
     factory.addPlayerToTeam = function(data){
        factory.players[data.playerIdx].team = data.team;
     }

     //Reset a player's team name to an empty string
     factory.removePlayerFromTeam = function($index){
        factory.players[$index].team = "";
     }
     return factory;
  }])
