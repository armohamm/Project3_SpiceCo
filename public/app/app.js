angular.module("angularUser", [

    "angularRoutes", "userControllers", "mainController",
    "authServices", "orderServices", "inquiryControllers",
    "contactController", "managementController",
    "userServices", "chefordersCtrl", "spicesCtrl", "requestsController",
    "requestServices", "messageController", "messageServices"]
)

    .config(function ($httpProvider) {
        $httpProvider.interceptors.push("AuthInterceptors");
    });
