"use strict";

angular.module("app")
    .controller("MainController", function(MainService) {
        const $ctrl = this;

        function changes(response) {
            $ctrl.shoppingcart = response.data;
        };

        //PUT
        $ctrl.updateData = (item) => {
            MainService.updateData(item).then(changes);
        };

        //GET
        MainService.getData().then(changes);

        //DELETE
        $ctrl.deleteData = (id) => {
            MainService.deleteData(id).then(changes);
        };

        //POST
        $ctrl.postData = (newItem) => {
            MainService.postData(newItem).then(changes);
            
        };
    });