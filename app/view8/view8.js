/**
 * Created by Administrator on 2016-09-14.
 */

'use strict';

angular.module('myApp.view8', ['ngRoute', 'ui.bootstrap' ])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view8', {
            templateUrl: 'view8/view8.html',
            controller: 'View8Ctrl'
        });
    }])

    .controller('View8Ctrl', ['$scope','$window', function($scope, $window ) {
        //////////////////////////////////////////////////////////////////////////////////

        $scope.popNewWindow = function(){

          var myWindow = $window.open( "./view8/view8.html","Kim",'width=400, height=400, menubar=no, scrollbars=no, status=no, toolbar=no, location=no, resizable=no'  );
            //myWindow.document.write ("<p> 이것은 빈 윈도우 오픈 연습입니다. 하지만 2번재 인자는 KIM");
        };

        $scope.popNewWindow_blank = function(){

            var myWindow = $window.open( "./view8/view8.html","_blank",'width=400, height=400, menubar=no, scrollbars=no, status=no, toolbar=no, location=no, resizable=no'  );
            //myWindow.document.write ("<p> 이것은 빈 윈도우 오픈 연습입니다.하지만 2번재 인자는 blank");
        };
        $scope.popNewWindow_self = function(){

            var myWindow = $window.open( "./view8/view8.html","_self",'width=400, height=400, menubar=no, scrollbars=no, status=no, toolbar=no, location=no, resizable=no'  );
           // myWindow.document.write ("<p> 이것은 빈 윈도우 오픈 연습입니다.하지만 2번째 인자는 self");
        };
        //////////////////////////////////////////////////////////////////////////////////
    }]);