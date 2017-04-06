console.log("The $locationProvider is downgraded because of using Angular 1.6");

angular.module('com.tpa.opensource.mywfa')
        .config(['$locationProvider', function($locationProvider) {
            $locationProvider.hashPrefix('');
        }
    ]);