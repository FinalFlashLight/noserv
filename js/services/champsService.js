angular.module('league')
.service('champsService', function($http){

  this.getChamps = function(){
    return $http.get('https://euw1.api.riotgames.com/lol/static-data/v3/champions?api_key=RGAPI-ef65facf-e625-4951-8bc6-65a63b8efbfe')
    .then(function(result){
      //put result data into an array instead of an object
      var arr = [];

      for(var key in result.data.data){
        arr.push(result.data.data[key]);
      }
      //return the array of objects /champions/

      return arr;
    })
  }

  this.getChamp = function(id){
    return $http.get('https://euw1.api.riotgames.com/lol/static-data/v3/champions/'+ id + '?champData=all&api_key=RGAPI-ef65facf-e625-4951-8bc6-65a63b8efbfe');
  }
});
