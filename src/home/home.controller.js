(function() {
    'use strict';

    angular
        .module('Application')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['Tags', 'Videos'];

    function HomeController(Tags, Videos) {
        var vm = this;
        vm.tags = [];
        vm.search = search;

        search();

        function search(searchText, tags) {
            var params = {};

            if (tags) {
                tags = tags.map(function(tag) {
                    return tag.tag.tag_name;
                });
                params['tags[]'] = tags.join(',');
            }

            if (searchText) {
                params.search = searchText;
            }

            var response = Videos.get(params, function() {
                vm.videos = response.videos;
            });
        }

        var response = Tags.query(function() {
            vm.tags = response.tags;
        });
    }

})();
