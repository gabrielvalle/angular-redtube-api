(function() {
    'use strict';
    angular
        .module('RedtubeApi')
        .factory('Tags', TagsService);

    TagsService.$inject = ['$resource'];

    function TagsService($resource) {
        return $resource(
            'http://cors-server.getup.io/url/api.redtube.com/?data=redtube.Tags.getTagList&output=json',
            {},
            {
                query: {
                    method: 'GET',
                    isArray: false
                }
            }
        );
    }

})();
