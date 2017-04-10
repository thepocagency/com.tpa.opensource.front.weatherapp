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

angular.module('com.tpa.opensource.mywfa')
        .factory('tpaLocalStorage', ['localStorageService',
            function (localStorageService) {
                return {
                    contains: function (key) {
                        return localStorageService.get(key) !== null;
                    },
                    add: function (key, value) {
                        localStorageService.set(key, angular.toJson(value));
                    },
                    // If the defaultValue is given: 
                    // 1. We check before if the key is in the localStorage
                    // 2. If the key is missing, we send the defaultValue as a result
                    get: function (key, defaultValue) {
                        if (defaultValue == undefined) {
                            return angular.fromJson(localStorageService.get(key));
                        }
                        else {
                            if (!this.contains(key)) {
                                return defaultValue;
                            }
                            else {
                                return angular.fromJson(localStorageService.get(key));
                            }
                        }
                    },
                    clear: function (key) {
                        localStorageService.remove(key, null);
                    },
                    clearAll: function () {
                        localStorageService.clearAll();
                    }
                };
            }]);

