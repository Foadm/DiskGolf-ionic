angular.module('starter')
  .controller('holeCtrl', ['newScorecardSrv', '$state', '$stateParams', function(newScorecardSrv, $state, $stateParams){
    var currentHole =this;
    currentHole.hole = $stateParams.hole;
    currentHole.newScorecardSrv = newScorecardSrv;
    currentHole.nextHole = function(){
      this.newScorecardSrv.scoreCardModel.nextHole();
      $state.go('scoreCard.hole', {hole : this.newScorecardSrv.scoreCardModel.currentHole});
    }

  }]);
