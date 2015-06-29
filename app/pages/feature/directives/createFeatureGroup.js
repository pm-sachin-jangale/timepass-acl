/**
* @desc topNavigation directive that will be used across pages
* @example <create-feature-group></create-feature-group>
*/
import template from './createFeatureGroup.html!text';
import css from './createFeatureGroup.css!css';

export var createFeatureGroup = function ($window) {
    return {
        restrict: 'E',
        template: template,
        scope: {
            callback: '&'
        },
        link: function (scope, iElement, iAttrs) {
            scope.group = {name: '', description: ''};
            scope.getLeftPosition = function () {
                return ($window.innerWidth / 2 - 300) + 'px';
            };

            scope.getTopPosition = function () {
                return ($window.innerHeight / 2 - 200) + 'px';
            };

            scope.cancelClick = function () {
                resetGroup(); 
                scope.callback({data: null});
            };

            scope.saveClick = function () {
                scope.callback({data: scope.group});
            };

            var resetGroup = function () {
                scope.group = {name: '', description: ''};  
            }
        }
    }
}