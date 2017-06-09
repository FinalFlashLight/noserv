var mod = angular.module('league', ['ui.router']);

mod.config(function ($stateProvider, $urlRouterProvider){

  $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: "../views/home.html",
        controller: 'homeCtrl',
      })
      .state('champions', {
        url: '/champions',
        templateUrl: "../views/champions.html",
        controller: 'champsCtrl',
      })
      .state('champion', {
        url: '/champion/:id',
        templateUrl: "../views/champion.html",
        controller: 'championCtrl',

      })
      .state('meow', {
        url: '/meow',
        templateUrl: '../views/meow.html',
        controller: 'meowCtrl',
      })

  $urlRouterProvider
      .otherwise('/home');

});
