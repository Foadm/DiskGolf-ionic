
angular.module('starter')
  .controller('courseCtrl',['newScorecardSrv','$state', function(newScorecardSrv, $state) {
    var course = this;
    course.createNewCourse = function(){
      newScorecardSrv.scoreCardModel.courseSetup.courseName = this.courseName;
      newScorecardSrv.scoreCardModel.courseSetup.NumberOfHoles = this.numberOfHoles;
      newScorecardSrv.scoreCardModel.courseSetup.NumberOfPlayers = this.numberOfPlayers;
      for(i = 1; i <= this.numberOfPlayers;  i++ ){
        newScorecardSrv.scoreCardModel.playersSetup["player" + i] = {name: ""};
        newScorecardSrv.scoreCardModel.playersSetup["player" + i].score = {};
        for(j=1 ; j<= this.numberOfHoles ; j++){
          newScorecardSrv.scoreCardModel.playersSetup["player" + i].score["hole"+j] = [0];
          newScorecardSrv.scoreCardModel.pars["hole" + j] = 0;
        }
      }
      $state.go('scoreCard.playerSetup');
    }
}]);
