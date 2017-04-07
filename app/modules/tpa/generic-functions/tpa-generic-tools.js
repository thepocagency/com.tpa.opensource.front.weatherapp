var tpaGenericTools = {
    genericFunctions : {  
        getCurrentYear: function () {
            return new Date().getFullYear();
        },
        
        timeConverter: function(UNIX_timestamp) {
            var myDate = new Date(UNIX_timestamp *1000);
            //return myDate.toLocaleString();
            return moment(myDate).format("h:mm:ss A");
        }
    }
};