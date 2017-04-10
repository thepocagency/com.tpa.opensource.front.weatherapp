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

/**
 * External resource to get weather data from OpenWeatherMap
 * 
 * It uses configuration inputs from the file tpa-config.js, cf. :
 * 
 * - tpaConfig.api.url
 * - tpaConfig.api.key
 * 
 * See documentation on https://openweathermap.org/api
 * 
 * @type resource
 */
angular.module('com.tpa.opensource.mywfa')
        .factory('OpenWeatherMapRsrc', function ($resource) {
            return $resource(
                    tpaConfig.api.url + ':action?id=:city_id',
                    {
                        action: '@action',
                        APPID: tpaConfig.api.key,
                        mode: 'json',
                        units: 'metric',
                        lang: 'en'
                    },
                    {
                        // This is a generic call, you have to speciy the action path
                        getDataWeatherByAction: {
                            method: 'JSONP',
                            isArray: false
                        },
                        
                        // Specific call to get current weather
                        getCurrentWeather: {
                            method: 'JSONP',
                            params: {
                                action: 'weather'
                            },
                            isArray: false
                        },
                        
                        // Specific call to get forecast
                        getForecast: {
                            method: 'JSONP',
                            params: {
                                action: 'forecast'
                            },
                            isArray: false
                        }
                    }
            )
        });
