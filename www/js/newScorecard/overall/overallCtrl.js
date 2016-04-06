angular.module('starter')
  .controller('overallCtrl', ['newScorecardSrv', '$state', function(newScorecardSrv, $state){
    var overall = this;
    overall.playernames  = newScorecardSrv.scoreCardModel.playersSetup;
    overall.numberOfHoles = newScorecardSrv.scoreCardModel.playersSetup.player1.score;
  }]);
