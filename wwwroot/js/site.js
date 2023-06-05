
// FadeIn effects for views by using jQuery
$(document).ready(function () {
    $(".welcome-screen").fadeIn(1500).removeClass("hidden");
    $(".login").fadeIn(1500).removeClass("hidden");
    $(".register").fadeIn(1500).removeClass("hidden");
    $(".resend-email").fadeIn(1500).removeClass("hidden");
    $(".notes").fadeIn(1500).removeClass("hidden");
    $(".create").fadeIn(1500).removeClass("hidden");
    $(".edit").fadeIn(1500).removeClass("hidden");
    $(".details").fadeIn(1500).removeClass("hidden");
    $(".delete").fadeIn(1500).removeClass("hidden");
    $(".search").fadeIn(1500).removeClass("hidden");
    $(".manage").fadeIn(1500).removeClass("hidden");
    $(".email").fadeIn(1500).removeClass("hidden");
    $(".password").fadeIn(1500).removeClass("hidden");
    $(".personal").fadeIn(1500).removeClass("hidden");
    $(".delete-personal").fadeIn(1500).removeClass("hidden");
    $(".register-confirmation").fadeIn(1500).removeClass("hidden");
});

// AngularJS for current date and time
var app = angular.module('notebox', []);
app.controller('noteboxController', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {
    $interval(function () {
        $scope.CurrentDate = new Date();
    }, 1000);

}]);