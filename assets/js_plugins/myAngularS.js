var app = angular.module('sport4U', ['ngRoute', 'ngLocale', 'ngSanitize', 'ngAnimate', 'slickCarousel']);

app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});

app.controller('sportCtrl', function($scope, $http, $timeout) {

    $scope.dataLoaded = true;

    $http.get("assets/json/data-S.json").then(function(response) {
        $scope.data = response.data;
        $scope.dataLoaded = false;
        $timeout(function() {
            $scope.dataLoaded = true;
        }, 20);
    });

    $scope.mainSlickConfig = {
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 1800,
        speed: 600,
        centerMode: true,
        variableWidth: true,
    };
});