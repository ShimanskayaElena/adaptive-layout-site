var test = angular.module('test', ['ngRoute']);

// маршрутизация 
test.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/description', { 
            templateUrl: 'pages/description.html'
        })
        .when('/opportunities', {  
            templateUrl: 'pages/opportunities.html'
        })
        .when('/kitchen', {  
            templateUrl: 'pages/kitchen.html'
        })
        .when('/store', {  
            templateUrl: 'pages/store.html'
        })
        .when('/stats', {  
            templateUrl: 'pages/stats.html'
        })
        .when('/other-modules', {  
            templateUrl: 'pages/other-modules.html'
        })
        .when('/response', {  
            templateUrl: 'pages/response.html'
        })
        .when('/pay', {  
            templateUrl: 'pages/pay.html'
        })
        .when('/query', {  
            templateUrl: 'pages/query.html',
            controller: 'QueryCtrl',
            controllerAs: 'query'
        })
        .when('/buy', {  
            templateUrl: 'pages/buy.html',
            controller: 'BuyCtrl',
            controllerAs: 'buy'
        })
        .otherwise({
            redirectTo: '/description'  
        });
}]);

test.controller('QueryCtrl', ['$scope', '$http', function($scope, $http){
    // объект, который будет содержать данные о пользователе
    $scope.user = {};
    // функция валидации данных о пользователе и их отправки на сервер
    $scope.saveData = function(myForm, user){
         
        // если форма валидна 
       if($scope.myForm.$valid){
            console.log('форма валидна!');
           
            $http.post( 'script.php', $scope.info )
                .success(function( data ){
                    if ( data) {
                        $scope.user = {};
                        console.log('Сообщение отправлено');
                        $scope.user.reply = "Благодарим Вас за проявленный интерес к нашей программе! В ближайшее время наш сотрудник свяжется с Вами.";
                    } else {
                    console.log('Возникла ошибка');
                    }
                })
                .error(function(err){
                    console.log(err);
                });
        } else {
            console.log('форма не валидна!');
        }
    }
    
}]);

test.controller('BuyCtrl', ['$scope', '$http', function($scope, $http){
    // объект, который будет содержать данные о пользователе
    $scope.info = {};
    // функция валидации данных о пользователе и их отправки на сервер
    $scope.saveData = function(infoForm, info){
    $scope.info.text = false; // выводится после успешной отправки формы на сервер
    $scope.info.form = false; // для скрытия формы на страничке
        // если форма валидна 
       if($scope.infoForm.$valid){
            console.log('форма валидна!');
           
            $http.post( 'script.php', $scope.info )
                .success(function( data ){
                    if ( data) {
                        $scope.info = {};
                        console.log('Сообщение отправлено');
                        $scope.info.text = true;
                        $scope.info.form = true; 
                        /*$scope.info.text = "Спасибо что выбрали нашу систему! В ближайшее время наш сотрудник свяжется с вами.";*/
                    } else {
                    console.log('Возникла ошибка');
                    }
                })
                .error(function(err){
                    console.log(err);
                });
        } else {
            console.log('форма не валидна!');
        }
    }
}]);