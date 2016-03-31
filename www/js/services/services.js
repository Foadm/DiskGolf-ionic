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
      currentHole : 1,
      nextHole : function(){
        if(this.currentHole < this.courseSetup.NumberOfHoles){
          this.currentHole = this.currentHole +1;
        }
      }
    };

    return {
      scoreCardModel : scoreCardModel
    }
  });
