'use strict';

angular
        .module('com.tpa.opensource.mywfa', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'LocalStorageModule',
            'smart-table',
            'ui.bootstrap',
            'pageslide-directive',
            'slickCarousel'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'modules/home/views/home-view.html',
                        controller: 'HomeCtrl',
                        controllerAs: 'home'
                    })
                    
                    .otherwise({templateUrl:'/404.html'});;
        })
        // Required to allow external call
        .config(function($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist([
                // Allow same origin resource loads.
                'self',
                // Allow loading from our assets domain.  Notice the difference between * and **.
                tpaConfig.api.url + '**'
            ]
        )});