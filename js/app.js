(function() {
    
    var app = angular.module('store', [ ]);
    
    app.controller('StoreController', function() {
        this.products = gems;
    })
    
    app.controller('PanelController', function() {
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    })
    
    app.controller('ReviewController', function() {
        this.review = {};
        
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };
    })
    
    app.directive('productTitle', function() {
        return {
            restrict : 'E',
            templateUrl : 'product-title.html',
        };
    });

    app.directive('productPanels', function() {
        return {
            restrict : 'E',
            templateUrl : 'product-panels.html',
            controller : function() {

            },
            controllerAs : 'panels',
        };
    });
    
    var gems = [
        {
            name : 'Pikachu',
            price : 2,
            description : 'about the product',
            reviews : [
                {
                    star : 5,
                    body : 'wowowowowow',
                    author : 'kapilrathore',
                },
                {
                    star : 3,
                    body : 'lalla',
                    author : 'ramesh',
                }
            ],
        },
        {
            name : 'Doremon',
            price : 5.45,
            description : 'about the product',
            reviews : [
                {
                    star : 5,
                    body : 'yoyooy',
                    author : 'kapilrathore',
                },
                {
                    star : 3,
                    body : 'xsasxasx',
                    author : 'ramesh',
                }
            ],
        },
    ];
    
})();
