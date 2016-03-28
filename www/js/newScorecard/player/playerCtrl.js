
angular.module('starter')
  .controller('playerCtrl', ['newScorecardSrv', function(newScorecardSrv){
    var player = this;
    player.number = newScorecardSrv.scoreCardModel.playersSetup;
    player.createPlayers = function() {
      console.log(newScorecardSrv.scoreCardModel);
    }
  }]);
