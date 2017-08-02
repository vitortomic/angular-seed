app.controller('indexCtrl', function ($scope, usersService, $http, transactionService, $filter) {
    $scope.fromAccount = "stagod";
    transactionService.getTransactions().then(function(transactions){
        console.log(transactions);
        $scope.sortType = 'transactionDate';
        $scope.sortReverse = true;
        transactions.forEach(function(element){
            element.dateString = $filter('date')(element.transactionDate, 'MMM. dd')
        })
        $scope.transactions = transactions;
    })

   $scope.getCategoryColor = function(transaction){
       return '{\'border-left\' : \'6px solid ' + transaction.categoryCode + '\'}';
   }

});
