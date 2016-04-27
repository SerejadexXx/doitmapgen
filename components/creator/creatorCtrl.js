(function() {
    var module = angular.module('indexApp');

    var creatorCtrl = function($scope) {
        $scope.viewState = 'foil';

        $scope.goalSize = 'xs';
        $scope.goalSizes = [
            {key: 'xs', display: 'XS'},
            {key: 's', display: 'S'},
            {key: 'm', display: 'M'},
            {key: 'l', display: 'L'}
        ];
        $scope.SetGoalSize = function(size) {
            $scope.goalSize = size;
        };

        $scope.textSize = 'xs';
        $scope.textSizes = [
            {key: 'xs', display: 'XS'},
            {key: 's', display: 'S'},
            {key: 'm', display: 'M'},
            {key: 'l', display: 'L'}
        ];
        $scope.SetTextSize = function(size) {
            $scope.textSize = size;
        };

        $scope.positionsView = 'grid';
        $scope.positionViews = [
            {key: 'grid', img: 'components/creator/assets/positions1.png', display: 'Grid'},
            {key: 'spiral', img: 'components/creator/assets/positions2.png', display: 'Spiral'},
            {key: 'fancy', img: 'components/creator/assets/positions3.png', display: 'Fancy'}
        ];
        $scope.SelectPositionView = function(positionView) {
            $scope.positionsView = positionView;
        };

        $scope.goalsCount = 0;
    };
    creatorCtrl.$inject = ['$scope'];

    module.controller('creatorCtrl', creatorCtrl);
})();