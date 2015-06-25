/**
* @desc topNavigation directive that will be used across pages
* @example <top-navigation></top-navigation>
*/
import template from './topNavigation.html!text';
import css from './topNavigation.css!css';

export var topNavigation = function () {
    return {
        restrict: 'E',
        template: template,
        scope: true,
        link: function (scope, iElement, iAttrs) {
            
        }
    }
}