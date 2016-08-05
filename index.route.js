app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

   // authentication routes
   $stateProvider
   .state('verify', {
      url: '/verify',
      templateUrl: 'verify/verify-email.html',
      controller: 'verifyEmailCtrl'
   });

   $urlRouterProvider.otherwise('/verify');

}]);
