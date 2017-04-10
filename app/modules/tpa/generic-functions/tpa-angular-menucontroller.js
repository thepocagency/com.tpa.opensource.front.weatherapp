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

angular.module('com.tpa.opensource.mywfa')
        .controller("tpaMenuController", ['$scope', 'tpaLocalStorage',
            function ($scope, tpaLocalStorage) {
                
                // By default, 'weather' action is selected
                // This boolean is used to change the CSS class in the bootstrap menu (cf. index page)
                $scope.isWeather = tpaLocalStorage.get("action", "weather") === "weather";
                
                $scope.changeAction = function(value) {
                    tpaLocalStorage.add("action", value);
                    $scope.isWeather = (value === "weather") ? true : false;
                };
            }]);

