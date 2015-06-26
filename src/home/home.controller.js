(function() {
    'use strict';

    angular
        .module('Application')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['Tags'];

    function HomeController(Tags) {
        var vm = this;
        vm.tags = [];

        var response = Tags.query(function() {
            vm.tags = response.tags;
        });
    }

})();
