angular.module('starter')
  .factory('newScorecardSrv', function(){
    var scoreCardModel = {
      courseSetup : {
        courseName : '',
        NumberOfHoles : 0,
        NumberOfPlayers : 0
      },
      playersSetup : {
      },
      pars :{},
      currentHole : 1
    };
    var holeIncrement = {
      nextHole : function(){
        if(scoreCardModel.currentHole < scoreCardModel.courseSetup.NumberOfHoles){
          scoreCardModel.currentHole = scoreCardModel.currentHole +1;
        }
      },
      previousHole : function(){
        if(scoreCardModel.currentHole > 1){
          scoreCardModel.currentHole = scoreCardModel.currentHole - 1;
        }
      }
    };
    return {
      scoreCardModel : scoreCardModel,
      holeIncrement : holeIncrement
    }
  });
