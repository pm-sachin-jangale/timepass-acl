/**
* @desc topNavigation directive that will be used across pages
* @example <sub-nav></sub-nav>
*/
import template from './subnav.html!text';
import css from './subnav.css!css';

export var subNav = function () {
    return {
        restrict: 'E',
        template: template,
        scope: {
            onChangePortal: '&',
            applicationList: '='
        },
        link: function (scope, iElement, iAttrs) {
            scope.isOptionClick = false;
            scope.selectedPortal = { name: 'Phoenix' };
            scope.isSettingsClick = false;
            
            scope.showMenu = function () {
                scope.isOptionClick = !scope.isOptionClick;
            }

            scope.showSettings = function () {
                scope.isSettingsClick = !scope.isSettingsClick;             
            }

            scope.changeOption = function ($event) {
                var target = $event.target,
                value = target.getAttribute('value'),
                appList = scope.applicationList;

                if (appList[value] !== undefined) {
                    scope.isOptionClick = false;
                    scope.selectedPortal = appList[value]; 
                    scope.onChangePortal({portalName: scope.selectedPortal});
                }
            }
        }
    }
}