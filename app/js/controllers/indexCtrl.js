app.controller('indexCtrl', function ($scope, usersService, $http, transactionService) {
    
    transactionService.getTransactions().then(function(transactions){
        console.log(transactions);
        $scope.sortType = 'transactionDate';
        $scope.sortReverse = false;
        $scope.transactions = transactions;
    })

   $scope.getCategoryColor = function(transaction){
       return '{\'border-left\' : \'6px solid ' + transaction.categoryCode + '\'}';
   }

});
