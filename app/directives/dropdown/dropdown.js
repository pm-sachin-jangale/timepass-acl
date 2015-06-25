/**
* @desc topNavigation directive that will be used across pages
* @example <create-feature-group></create-feature-group>
*/
import template from './dropdown.html!text';
import css from './dropdown.css!css';

export var customDropdown = function ($window) {
    return {
        restrict: 'E',
        template: template,
        replace: true,
        scope: {
            afterOptionSelected: '&',
            options: '='
        },
        link: function (scope, iElement, iAttrs) {
            scope.onChangeOption = function () {
                scope.afterOptionSelected({value: scope.selectedOption.label});
            }
        }
    }
}