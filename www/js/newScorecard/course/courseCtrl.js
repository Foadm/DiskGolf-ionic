
angular.module('starter')
  .controller('courseCtrl',['newScorecardSrv','$state', function(newScorecardSrv, $state) {
    var course = this;
    course.createNewCourse = function(){
      newScorecardSrv.scoreCardModel.courseSetup.courseName = this.courseName;
      newScorecardSrv.scoreCardModel.courseSetup.NumberOfHoles = this.numberOfHoles;
      newScorecardSrv.scoreCardModel.courseSetup.NumberOfPlayers = this.numberOfPlayers;
      for(i = 1; i <= this.numberOfPlayers;  i++ ){
        newScorecardSrv.scoreCardModel.playersSetup["player" + i] = {name: "", score: null};
      }
      $state.go('scoreCard.playerSetup');
    }
}]);
