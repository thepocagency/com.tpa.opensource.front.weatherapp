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
                    get: function (key) {
                        return angular.fromJson(localStorageService.get(key));
                    },
                    clear: function (key) {
                        localStorageService.remove(key, null);
                    },
                    clearAll: function () {
                        localStorageService.clearAll();
                    }
                };
            }]);

