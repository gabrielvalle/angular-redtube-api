(function(){
    'use strict';

    angular
        .module('Application', ['ngRoute', 'ngResource', 'RedtubeApi', 'ui.select', 'ngSanitize'])
        .config(ModuleConfiguration);

    function ModuleConfiguration($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                controllerAs: 'home',
                templateUrl: 'home/home.view.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
