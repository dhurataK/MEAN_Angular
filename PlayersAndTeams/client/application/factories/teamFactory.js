angular.module('app').factory("teamFactory", function(){
    var factory = {};
   //Initialize our list of teams
   factory.teams = [
      {name:"Lakers"},
      {name:"Arsenal"},
      {name:"Bayern"}
   ];

   //Pass the team list to a controller
   factory.getTeams = function(callback){
      callback(factory.teams);
   }

   //Add new team to the list
   factory.addTeam = function(team, callback){
      factory.teams.push(team);
      callback()
   }

   //Remove the team from the list
   factory.removeTeam = function(team, callback){
     for (var i = 0; i < factory.teams.length; i++) {
       if(factory.teams[i] == team){
         console.log("Deleted "+team.name);
         factory.teams.splice(i, 1);
         break;
       }
     }
     callback()
   }
   return factory;
})
