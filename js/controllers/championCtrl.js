angular.module('league')
.controller('championCtrl', function($scope, champsService, $stateParams, $sce){

  $scope.myStyle = {
    'height': '500px',
    'max-width': '1211px',
    'background-color': 'red',
    'border-radius': '25px',
  }

  var promise = champsService.getChamp(parseInt($stateParams.id)); //for test, should get a champ
  promise.then(function(result){
    //start of .then
    $scope.champInfo = result.data;
    var numSkins = $scope.champInfo.skins.length;
    $scope.random = Math.floor(Math.random() * numSkins)
    console.log($scope.random);
    console.log($scope.champInfo);
    $scope.myStyle = {
      'border-radius': '25px',
      'display': 'block',
      'position': 'relative',
      'height': '500px',
      'max-width': '1211px',
      'background-image': "url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + $scope.champInfo.key + "_" + $scope.random + ".jpg')"
    }
    $scope.attackbar = {
      'background-color':'red',
      'width': $scope.champInfo.info.attack * 20 + 'px',
      'height': '25px',
      'border-radius': '5px',
      'border': '1px solid gold',
    }
    $scope.magicbar = {
      'background-color':'purple',
      'width': $scope.champInfo.info.magic * 20 + 'px',
      'height': '25px',
      'border-radius': '5px',
      'border': '1px solid gold',
    }
    $scope.defensebar = {
      'background-color':'yellow',
      'width': $scope.champInfo.info.defense * 20 + 'px',
      'height': '25px',
      'border-radius': '5px',
      'border': '1px solid gold',
    }
    $scope.difficultybar = {
      'background-color':'orange',
      'border-radius': '5px',
      'border': '1px solid gold',
      'width': $scope.champInfo.info.difficulty * 20 + 'px',
      'height': '25px',
    }
    $scope.spellimg1 = {
      'background-image': "url('http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/" + $scope.champInfo.spells[0].image.full + "')",
      'width' : '100px',
      'height' : '100px',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'display': 'inline-block',
    }
    $scope.spellimg2 = {
      'background-image': "url('http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/" + $scope.champInfo.spells[1].image.full + "')",
      'width' : '100px',
      'height' : '100px',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'display': 'inline-block',
    }
    $scope.spellimg3 = {
      'background-image': "url('http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/" + $scope.champInfo.spells[2].image.full + "')",
      'width' : '100px',
      'height' : '100px',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'display': 'inline-block',
    }
    $scope.spellimg4 = {
      'background-image': "url('http://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/" + $scope.champInfo.spells[3].image.full + "')",
      'width' : '100px',
      'height' : '100px',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'display': 'inline-block',
    }
    $scope.lore = $sce.trustAsHtml($scope.champInfo.lore);
    $scope.skinName = $scope.champInfo.skins[$scope.random].name;
    $scope.tags = $scope.champInfo.tags;
    console.log($scope.skinName);

  }) //end of .then
  .catch(function(err){
    console.warn(err.status);
  })

});
