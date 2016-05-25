(function () {

  angular.module("lomaApp", ["ngRoute","ngSanitize"]);

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/tmp/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        template: '<h1>hell</h1>'
      })
      .when('/sya', {
        template: '<h1>hell</h1>'
      })
      .when('/register', {
        template: '<h1>hell</h1>'
      })
      .when('/login', {
        template: '<h1>hell</h1>'
      })
      .otherwise({ redirectTo: '/' });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }

  angular
    .module('lomaApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();