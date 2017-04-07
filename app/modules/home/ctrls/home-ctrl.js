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
                    {id: 2950159, name: 'Berlin'},
                    {id: 6453366, name: 'Oslo'},
                ];

                // This version of ui-select only works with the same variable: cities + cities.selected
                // You can not use your own distinct variable, like selectedCity for ex.
                $scope.clearSelection = function () {
                    $scope.cities.selected = null;
                    $scope.sunrise = null;
                    $scope.sunset = null;
                };

                // Get remote data from OpenWeatherMap
                // Or if already in the local storage, get it from the local storage
                // (Because, OpenWeaterMap free-plan API has limited access...)
                $scope.onSelected = function (selectedCity) {

                    $scope.action = tpaLocalStorage.get("action", "weather"); // Could be 'weather' or 'forecast' ; default is 'weather'
                    var currentId = $scope.cities.selected.id;
                    var cacheKey = $scope.action + "_" + currentId;

                    if (tpaLocalStorage.contains(cacheKey)) { // Get from the storage
                        $scope.updateFromWeatherData($scope.action, tpaLocalStorage.get(cacheKey));
                    } else { // Get from API and add to the storage
                        OpenWeatherMapRsrc.getDataWeatherByAction({action: $scope.action, city_id: currentId}).$promise.then(function (remoteData) {
                            tpaLocalStorage.add(cacheKey, remoteData);
                            $scope.updateFromWeatherData($scope.action, remoteData);
                        });
                    }
                };

                // This is a generic method to update weather or forecast data, according to othe action input
                // action can only have the value 'weather' or 'forecast'
                $scope.updateFromWeatherData = function (action, weatherData) {
                    
                    if (action === "weather") {
                        
                        $scope.sunrise = tpaGenericTools.genericFunctions.timeConverter(weatherData.sys.sunrise);
                        $scope.sunset = tpaGenericTools.genericFunctions.timeConverter(weatherData.sys.sunset);
                        
                    } else {
                        
                        // You can find more information on this page : 
                        // http://jtblin.github.io/angular-chart.js/
                        $scope.labels = [];
                        var pressureData = [];
                        
                        $.each(weatherData.list, function(key, value) {
                            $scope.labels.push(value.dt_txt);
                            pressureData.push(value.main.sea_level);
                        });
                        
                        $scope.series = ['Sea level pressure'];
                        
                        $scope.data = [
                            pressureData
                        ];
                        
                        $scope.onClick = function (points, evt) {
                            console.log(points, evt);
                        };
                        
                        $scope.datasetOverride = [{yAxisID: 'y-axis-1'}, {yAxisID: 'y-axis-2'}];
                        
                        $scope.options = {
                            scales: {
                                yAxes: [
                                    {
                                        id: 'y-axis-1',
                                        type: 'linear',
                                        display: true,
                                        position: 'left'
                                    },
                                    {
                                        id: 'y-axis-2',
                                        type: 'linear',
                                        display: true,
                                        position: 'right'
                                    }
                                ]
                            }
                        };
                        
                    }
                };
            }]);