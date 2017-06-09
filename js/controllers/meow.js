angular.module('league')
.controller('meowCtrl', function($scope, meowSrv){
  $scope.test = 'test mew';
  $scope.getNewCat = function(){
    var promise = meowSrv.getCat();
    promise.then(function(result){
      $scope.cat = result.data.file;
      console.log($scope.cat);
    })
  } //end of get new cat
  $scope.getNewCat();
})
