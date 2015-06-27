(function() {
    'use stric';

    angular
        .module('Application')
        .directive('renderVideos', RenderVideos);

    function RenderVideos() {
        return {
            restrict: 'E',
            templateUrl: 'src/shared/render-videos.directive.html',
            scope: {
                videos: '='
            }
        };
    }
})();
