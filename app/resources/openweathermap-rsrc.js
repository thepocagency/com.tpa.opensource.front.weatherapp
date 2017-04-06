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
 * @author Alexandre Veremme | alex@the-poc-agency.com
 */
angular.module('com.tpa.opensource.mywfa')
        .factory('OpenWeatherMapRsrc', function ($resource) {
            return $resource(
                    tpaConfig.api.url + ':action?id=:city_id',
                    {
                        APPID: tpaConfig.api.key,
                        mode: 'json',
                        units: 'metric',
                        lang: 'en'
                    },
                    {
                        getCurrentWeather: {
                            method: 'JSONP',
                            params: {
                                action: 'weather'
                            },
                            isArray: false
                        },
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
