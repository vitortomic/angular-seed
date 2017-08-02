app.factory('senderService', [function(){
    var testSender = {name: "Free Checking(4692)", amount: "5824.76"};
    var getSender = function(){
        var sender = localStorage.getItem("testSender");
        if(sender) return JSON.parse(sender);
        localStorage.setItem("testSender", JSON.stringify(testSender));
        return testSender;
    };
    return {
        getSender: function(){
            return getSender();
        },
        chargeSender: function(amount){
            var sender = getSender();
            sender.amount -= amount;
            localStorage.setItem("testSender", JSON.stringify(sender));
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