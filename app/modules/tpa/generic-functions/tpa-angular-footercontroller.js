angular.module('com.tpa.opensource.mywfa')
        .controller("tpaFooterController", ['$scope',
            function ($scope) {
                $scope.currentYear = tpaGenericTools.genericFunctions.getCurrentYear();
                $scope.appVersion = tpaConfig.application.version;
            }]);