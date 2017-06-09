angular.module('league')
.service('meowSrv', function($http){

  this.getCat = function(){
    return $http.get("http://random.cat/meow");
  }
});
