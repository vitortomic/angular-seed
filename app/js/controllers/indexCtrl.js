app.controller('indexCtrl', function ($scope, usersService, $http) {
    usersService.getUsers().then(function(users){
        console.log(users)
        $scope.users = users;
    });
   
});
