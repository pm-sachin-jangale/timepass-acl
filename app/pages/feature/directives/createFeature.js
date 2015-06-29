/**
* @desc topNavigation directive that will be used across pages
* @example <create-group></create-group>
*/
import template from './createFeature.html!text';
import css from './createFeature.css!css';

export var createFeature = function ($window) {
    return {
        restrict: 'E',
        template: template,
        scope: {
            callback: '&'
        },
        link: function (scope, iElement, iAttrs) {
            scope.feature = {
                name: '', 
                description: '', 
                featureGroup: '', 
                resourceType: '',
                controlType: ''
            };
            
            scope.switchModel = true;
            scope.featureGroupList = [
                { label: 'Group 1', value: '1' },
                { label: 'Group 2', value: '2' },
                { label: 'Group 3', value: '3' },
                { label: 'Group 4', value: '4' },
                { label: 'Group 5', value: '5' },
                { label: 'Group 6', value: '6' },
                { label: 'Group 7', value: '7' }
            ];

            scope.resourcesList = [
                { label: 'Order Management', value: '1' },
                { label: 'User Management', value: '2' },
                { label: 'Inventory Management', value: '3' }
            ];

            scope.getLeftPosition = function () {
                return ($window.innerWidth / 2 - 300) + 'px';
            };

            scope.getTopPosition = function () {
                return ($window.innerHeight / 2 - 350) + 'px';
            };

            scope.cancelClick = function () {
                scope.callback({data: null});
            };

            scope.saveClick = function () {
                console.log(scope.feature);
                scope.callback({data: null});
            };

            scope.getFeatureGroup = function (groupName) {
                scope.feature.featureGroup = groupName;
            };

            scope.getControlType = function (controlTypeName) {
                scope.feature.controlType = controlTypeName;
            };
        }
    }
}