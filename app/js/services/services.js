app.factory('dataMockingService', [function(){
    var testUser = {firstname: 'Vitor', lastname: 'Tomic', age: 26};
    return {
        getTestUser: function(){
            return testUser;
        }
    }
}]);

app.factory('usersService', ['$http', function($http){
    return {
        getUsers: function(){
            return $http.get('/getTestUser').then(
                function successCallback(response){
                    return response.data;
                }, 
                function errorCallbacl(error){
                    console.log("Error: " + e.message);
                }
            )
        }
    }
}]);

app.factory('transactionService', ['$http', function($http){
    return {
       getTransactions: function(){
           return $http.get('/transactions').then(
               function successCallback(response){
                    return response.data;
                }, 
                function errorCallbacl(error){
                    console.log("Error: " + e.message);
                }
           )
       }
    }
}]);