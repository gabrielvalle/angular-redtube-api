(function() {
    'use stric';

    angular
        .module('Application')
        .directive('renderVideos', RenderVideos);

    RenderVideos.$inject = ['$timeout', '$templateCache', '$interpolate'];

    function RenderVideos($timeout, $templateCache, $interpolate) {
        var directiveDefinition = {
            restrict: 'E',
            templateUrl: 'shared/render-videos.directive.html',
            scope: {
                videos: '='
            },
            link: link
        };

        return directiveDefinition;

        function link(scope, element, attributes) {
            scope.$watch('videos', function(newVideos, oldVideos)  {
                $timeout(function() {
                    if (scope.videos) {
                        console.log('videos');
                        var id;
                        var elementQuery;
                        var video;
                        var content;
                        var popoverTemplate = $interpolate($templateCache.get('popoverContent.html'));
                        for (var index in newVideos) {
                            video = newVideos[index].video;
                            elementQuery = ".video-" + video.video_id;
                            var content = popoverTemplate({
                                video: video
                            });
                            $(elementQuery).popover({
                                trigger: 'hover',
                                title: video.title,
                                content: content,
                                placement: 'bottom',
                                html: true
                            });
                        }
                    }
                });
            });
        }
    }
})();
