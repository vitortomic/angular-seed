'use strict';
var app = angular.module('angularSeed', ['ngRoute','ngMockE2E','ngMaterial','ngMessages']);
app.config(
        function Config($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl : '/app/html/home.html',
                controller : 'indexCtrl',
                controllerUrl: 'controllers/indexCtrl.js'
            })
            .otherwise('/');
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
});

app.run(function($httpBackend, transactionsDataService){
		console.log("fake backend is running");
        $httpBackend.whenGET(/\.html$/).passThrough();
        $httpBackend.whenGET('/transactions').respond(transactionsDataService.getTransactions());
});

app.run(function($rootScope){
	$rootScope.$on("$locationChangeStart", function(event, next, current){
		console.log("navigating to " + next);
	});
});