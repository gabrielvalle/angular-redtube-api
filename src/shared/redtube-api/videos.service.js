(function() {
    'use strict';
    angular
        .module('RedtubeApi')
        .factory('Videos', VideosService);

    VideosService.$inject = ['$resource'];

    function VideosService($resource) {
        return $resource(
            'http://cors-server.getup.io/url/api.redtube.com/?data=redtube.Videos.searchVideos&output=json&thumbsize=medium',
            {},
            {
                query: {
                    method: "GET",
                    isArray: false
                }
            }
        );
    }
})();
