'use strict';

angular.module('com.tpa.opensource.mywfa')
        .controller('HomeCtrl', ['$scope', 'OpenWeatherMapRsrc', 'tpaLocalStorage',
            function ($scope, OpenWeatherMapRsrc, tpaLocalStorage) {

                // You could also find all the city ids here : 
                // http://openweathermap.org/help/city_list.txt
                $scope.cities = [
                    {id: 2643744, name: 'London'},
                    {id: 2968815, name: 'Paris'},
                    {id: 6544881, name: 'Amsterdam'},
                    {id: 3614789, name: 'Berlin'},
                    {id: 6453366, name: 'Oslo'},
                ];
                
                // This version of ui-select only works with the same variable: cities + cities.selected
                // You can not use your own distinct variable, like selectedCity for ex.
                $scope.clearSelection = function() {
                    $scope.cities.selected = null;
                    $scope.sunrise = null;
                    $scope.sunset = null;
                };
                
                // Get remote data from OpenWeatherMap
                // Or if already in the local storage, get it from the local storage
                // (Because, OpenWeaterMap free-plan API has limited access...)
                $scope.onSelected = function (selectedCity) {
                    
                    var currentId = $scope.cities.selected.id;
                    var currentWeatherData = {};
                    
                    if (tpaLocalStorage.contains(currentId)) { // Get from the storage
                        currentWeatherData = tpaLocalStorage.get(currentId);
                        $scope.updateFromWeatherData(currentWeatherData);
                    }
                    else { // Get from API and add to the storage
                        OpenWeatherMapRsrc.getCurrentWeather({city_id: currentId}).$promise.then(function (remoteData) {
                            tpaLocalStorage.add(currentId, remoteData);
                            $scope.updateFromWeatherData(remoteData);
                        });
                    }
                };
                
                $scope.updateFromWeatherData = function(weatherData) {
                    $scope.sunrise = tpaGenericTools.genericFunctions.timeConverter(weatherData.sys.sunrise);
                    $scope.sunset = tpaGenericTools.genericFunctions.timeConverter(weatherData.sys.sunset);
                };
            }]);