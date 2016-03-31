
angular.module('starter')
  .controller('playerCtrl', ['newScorecardSrv','$state', function(newScorecardSrv,$state){
    var player = this;
    player.number = newScorecardSrv.scoreCardModel.playersSetup;
    var firstHole = newScorecardSrv.scoreCardModel.currentHole;
    player.createPlayers = function() {
      $state.go('scoreCard.hole', {hole : firstHole});
    }
  }]);
