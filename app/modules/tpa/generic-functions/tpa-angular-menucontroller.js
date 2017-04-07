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

