'use strict';

/**
 * @ngdoc overview
 * @name reliableApp
 * @description
 * # reliableApp
 *
 * Main module of the application.
 */
angular
    .module('reliableApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap',
        'GoogleMapsNative',
        'LocalStorageModule',

    ])
    .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('ls').setStorageType('sessionStorage');
    }])
    .config(function (gmLibraryProvider) {
        gmLibraryProvider.configure({
            language: 'en'
        });
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/miPerfil', {
                templateUrl: 'views/miperfil.html',
                controller: 'MiperfilCtrl',
                controllerAs: 'miPerfil'
            })
            .when('/search', {
                templateUrl: 'views/search.html',
                controller: 'SearchCtrl',
                controllerAs: 'search'
            })
            .when('/maps/:id', {
                templateUrl: 'views/maps.html',
                controller: 'MapsCtrl',
                controllerAs: 'maps'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'loginCtrl',
                controllerAs: 'login'
            })
            .when('/perfilTrabajador', {
                templateUrl: 'views/perfiltrabajador.html',
                controller: 'PerfiltrabajadorCtrl',
                controllerAs: 'perfilTrabajador'
            })
            .when('/contratoModal', {
                templateUrl: 'views/contratomodal.html',
                controller: 'ContratomodalCtrl',
                controllerAs: 'contratoModal'
            })
            .when('/favoritos', {
                templateUrl: 'views/favoritos.html',
                controller: 'FavoritosCtrl',
                controllerAs: 'favoritos'
            })
            .when('/sla', {
                templateUrl: 'views/sla.html',
                controller: 'SlaCtrl',
                controllerAs: 'sla'
            })
            .when('/busquedaAvanzada', {
                templateUrl: 'views/busquedaavanzada.html',
                controller: 'BusquedaavanzadaCtrl',
                controllerAs: 'busquedaAvanzada'
            })
            .when('/contratados', {
                templateUrl: 'views/contratados.html',
                controller: 'ContratadosCtrl',
                controllerAs: 'contratados'
            })
            .when('/profile-views', {
              templateUrl: 'views/profile-views.html',
              controller: 'ProfileViewsCtrl',
              controllerAs: 'profileViews'
            })
            .otherwise({
                redirectTo: '/'
            })

    })
    //.run(function($rootScope){
      //  $rootScope.$on('$routeChangeSuccess', function(){
        //    var currentUser = $rootScope.currentUser;
          //  if(currentUser){
            //    $rootScope.isLoggedIn = true;
              //  $rootScope.currentUser = currentUser;
            //} else {
              //  $rootScope.isLoggedIn = false;
            //}
        //})
//    }
//)
;
