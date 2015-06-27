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

        function search(searchText, tags) {
            tags = tags.map(function(tag) {
                return tag.tag.tag_name;
            });

            var params = {
                search: searchText,
                "tags[]": tags.join(',')
            };

            console.log(params);

            var response = Videos.get(params, function() {
                vm.videos = response.videos;
            });
        }

        var response = Tags.query(function() {
            vm.tags = response.tags;
        });
    }

})();
