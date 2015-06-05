require('angular/angular');

var FonzApp = angular.module('FonzApp', [require('angular-route')]);

//controllers
require('./FonzApp/controllers/maincontroller')(FonzApp);
require('./FonzApp/controllers/homecontroller')(FonzApp);
require('./FonzApp/controllers/profilecontroller')(FonzApp);
require('./FonzApp/controllers/gallerycontroller')(FonzApp);
require('./FonzApp/controllers/appointmentcontroller')(FonzApp);

//filters

//services aka factories

//directives
require('./FonzApp/directives/headdirective')(FonzApp);

//routes
FonzApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/views/FonzApp/home.html',
			controller: 'homecontroller',
			css: 'css/homecss.css'
		})
		.when('/profile', {
			templateUrl: '/views/FonzApp/profile.html',
			controller: 'profilecontroller',
			css: 'css/profilecss.css'
		})
		.when('/gallery', {
			templateUrl: '/views/FonzApp/gallery.html',
			controller: 'gallerycontroller',
			css: 'css/gallerycss.css'
		})
		.when('/appointment', {
			templateUrl: '/views/FonzApp/appointment.html',
			controller: 'appointmentcontroller',
			css: 'css/appointmentcss.css'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);