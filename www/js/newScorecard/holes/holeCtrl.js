angular.module('starter')
  .controller('holeCtrl', ['newScorecardSrv', '$state', '$stateParams', function(newScorecardSrv, $state, $stateParams){
    var currentHole =this;
    currentHole.model = newScorecardSrv.scoreCardModel;
    currentHole.currentHole = newScorecardSrv.scoreCardModel.currentHole;
    currentHole.score = 0;
    currentHole.numberOfPlayers = newScorecardSrv.scoreCardModel.numberOfPlayers;
    currentHole.increment = newScorecardSrv.holeIncrement;
    currentHole.numberOfHoles = newScorecardSrv.scoreCardModel.courseSetup.NumberOfHoles;
    currentHole.pars = newScorecardSrv.scoreCardModel.pars;
    currentHole.players = newScorecardSrv.scoreCardModel.playersSetup;
    currentHole.hole = newScorecardSrv.scoreCardModel.currentHole;
    currentHole.nextHole = function(){
      currentHole.increment.nextHole();
      $state.go('scoreCard.hole', {hole : currentHole.model.currentHole});
    };
    currentHole.previousHole = function(){
      currentHole.increment.previousHole();
      $state.go('scoreCard.hole', {hole : currentHole.model.currentHole});
    };
    currentHole.submitScore = function(){
      for(i=1; i <= 3; i++){
        var currentScore = currentHole.players['player' + i].score['hole' + currentHole.currentHole];
        var finalScore = currentScore[0] - currentHole.pars['hole' + currentHole.currentHole];
        currentScore.push(finalScore);
      }
      currentHole.nextHole();
    }
  }]);
