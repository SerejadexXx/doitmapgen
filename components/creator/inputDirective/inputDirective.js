(function() {
    var module = angular.module('indexApp');

    var inputDirective = function() {
        var link = function(scope, elements, attrs) {
            scope.editState = false;
            if (!isNaN(scope.value)) {
                scope.value = 20;
            }
            scope.enteredValue = scope.value;


            scope.SetEditState = function() {
                scope.editState = true;
            };

            scope.SetViewState = function() {
                scope.editState = false;
                if (scope.enteredValue % 1 != 0) {
                    scope.enteredValue = 20;
                }
                if (scope.enteredValue > 200) {
                    scope.enteredValue = 200;
                }
                if (scope.enteredValue < 1) {
                    scope.enteredValue = 1;
                }

                scope.value = scope.enteredValue;
            };

            scope.IncEnteredValue = function() {
                if (scope.enteredValue < 200) {
                    scope.enteredValue++;
                }

                scope.value = scope.enteredValue;
            };

            scope.DecEnteredValue = function() {
                if (scope.enteredValue > 1) {
                    scope.enteredValue--;
                }

                scope.value = scope.enteredValue;
            };
        };

        return {
            restrict: 'AE',
            scope: {
                value: '='
            },
            link: link,
            templateUrl: 'components/creator/inputDirective/inputDirectiveView.html'
        };
    };

    module.directive('inputDirective', inputDirective);
})();