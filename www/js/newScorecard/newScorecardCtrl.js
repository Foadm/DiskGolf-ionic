
angular.module('starter')
  .controller('newScorecardCtrl',['newScorecardSrv', function(newScorecardSrv) {
    var newScorecard = this;

    //var numberOfHoles = newScorecard.numberOfHoles;
    //var numberofPlayers = newScorecard.NumberOfPlayers;
    newScorecard.createNewCourse = function(){
      newScorecardSrv.scoreCardModel.courseSetup.courseName = this.courseName;
      newScorecardSrv.scoreCardModel.courseSetup.NumberOfHoles = this.numberOfHoles;
      newScorecardSrv.scoreCardModel.courseSetup.NumberOfPlayers = this.numberOfPlayers;
      console.log(newScorecardSrv.scoreCardModel);
    }
}]);
