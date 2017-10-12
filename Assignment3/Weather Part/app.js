

var animateApp = angular.module('loginApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'first.html',
            controller: 'mainController'
        })
        .when('/login', {
            templateUrl: 'login.html',
            controller: 'loginController'
        })
        .when('/register', {
            templateUrl: 'register.html',
            controller: 'registerController'
        });

});

animateApp.controller('mainController', function($scope) {
    $scope.page = 'first';
});

animateApp.controller('loginController', function($scope) {
    $scope.page = 'login';
});

animateApp.controller('registerController', function($scope) {
    $scope.page = 'register';
});

