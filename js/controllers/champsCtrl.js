angular.module('league')
.controller('champsCtrl', function($scope, champsService){


  //get champions
  var promise = champsService.getChamps();
  promise.then(function(result){
    $scope.champions = result;
    console.log($scope.champions);
  })
  .catch(function(err){
    console.log(err);
  });





})
