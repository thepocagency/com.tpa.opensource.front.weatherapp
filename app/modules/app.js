/*
 * Copyright 2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 * 
 * @author Alexandre Veremme @ The POC Agency | alex [at] the-poc-agency.com
 */

'use strict';

angular
        .module('com.tpa.opensource.mywfa', [
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'LocalStorageModule',
            'ui.bootstrap',
            'ui.select',
            "chart.js"
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
        // To allow external risky calls
        .config(function($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist([
                // Allow same origin resource loads
                'self',
                // Allow loading from our assets domain
                tpaConfig.api.url + '**'
            ]
        )});