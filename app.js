(function () {
'use strict';
    
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope']
function LunchCheckController($scope) {
    $scope.foodInput = "";
    $scope.messageToUser = "";

    $scope.lunchCheck = function () {
        var numberOfItems = $scope.foodInput.split(',');
        if (numberOfItems == '') {
            $scope.messageToUser = "Please enter data first";
        }
        else if (numberOfItems.length <= 3) {
            $scope.messageToUser = "Enjoy!";
        }
        else if (numberOfItems.length >= 4) {
            $scope.messageToUser = "Too much!";
        }
    };
}

})();