angular.module('league')
.controller('championCtrl', function($scope, champsService, $stateParams){

  $scope.myStyle = {
    'height': '500px',
    'max-width': '1211px',
    'background-color': 'red',
    'border-radius': '25px',
  }
  var promise = champsService.getChamp(parseInt($stateParams.id)); //for test, should get a champ
  promise.then(function(result){
    $scope.champInfo = result.data;
    var numSkins = $scope.champInfo.skins.length;
    $scope.random = Math.floor(Math.random() * numSkins)
    console.log($scope.random);
    console.log($scope.champInfo);
    $scope.myStyle = {
      'border-radius': '25px',
      'display': 'block',
      'height': '500px',
      'max-width': '1211px',
      'background-image': "url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + $scope.champInfo.key + "_" + $scope.random + ".jpg')"
    }
    $scope.skinName = $scope.champInfo.skins[$scope.random].name;
    console.log($scope.skinName);

  }) //end of .then
  .catch(function(err){
    console.warn(err.status);
  })

});
