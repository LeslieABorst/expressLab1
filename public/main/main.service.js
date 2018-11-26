"use strict"

angular.module("app")
    .service("MainService", function($http) {
        const service = this;

        service.postData = (newItem) => {
            return $http({
                method: "POST",
                url: "/cart-items",
                data: newItem
            });

        };

        service.updateData = (item) => {
            return $http({
                method: "PUT",
                url: `/cart-items/${item.id}`,
                data: item
            });
        };

        service.deleteData = (id) => {
            return $http({
                method: "DELETE",
                url: `/cart-items/${id}`
            });
        };

        service.getData = () => {
            return $http({
                method: "GET",
                url: "/cart-items"
            });
        };
    });