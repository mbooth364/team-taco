angular.module("Main")
    .controller('landingController', ['$scope', 'userSigninService', '$localStorage', '$location', function ($scope, userSigninService, $localStorage, $location) {
        $scope.zoomatoDisplay = [];

        $scope.signup = function (user) {
            userSigninService.newUserPost(user)
                .then(function (response) {
                    console.log(response);
                })
        };
        $scope.login = function (user) {

            userSigninService.loginPost(user)
                .then(function (data) {
                    $location.path("/home");
                }, function (data) {
                    alert(data.message + "This is working");
                });
        };

        // $scope.loginEnter = function ($event, user) {
        //     if ($event.which === 13) {
        //         console.log($event);
        //         console.log(user);
        //         $scope.login(user);
        //     }
        // }
    }]);