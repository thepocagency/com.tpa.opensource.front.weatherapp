'use strict';

angular.module('com.tpa.opensource.mywfa')
        .controller('HomeCtrl', ['$scope', 'OpenWeatherMapRsrc',
            function ($scope, OpenWeatherMapRsrc) {

                $scope.london = OpenWeatherMapRsrc.getCurrentWeather({
                    city_id: 2643744
                });

            }]);