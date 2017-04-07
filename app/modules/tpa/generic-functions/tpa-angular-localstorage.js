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

