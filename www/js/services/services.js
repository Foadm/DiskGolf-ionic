angular.module('starter')
  .factory('newScorecardSrv', function(){
    var scoreCardModel = {
      courseSetup : {
        courseName : '',
        NumberOfHoles : 0,
        NumberOfPlayers : 0
      },
      playersSetup : {
      }
    };
    return {
      scoreCardModel : scoreCardModel
    }
  });
