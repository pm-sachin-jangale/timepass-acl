import addFeatureRoute from './addfeature.route';
import { subNav } from './directives/subnav';
import { createFeatureGroup } from './directives/createFeatureGroup';
import { createFeature } from './directives/createFeature';
import { customDropdown } from '../../directives/dropdown/dropdown';
import featureGroupFactory from './factories/featuregroup.factory';
import featureFactory from './factories/features.factory';
import AddFeature from './addfeature.controller';
import applicationDataFactory from 'services/applicationdata.factory';

export var addFeatureModule = angular.module('addFeature', [
    
])
.config(['$stateProvider', '$resourceProvider', addFeatureRoute])
.factory('applicationDataFactory', ['serverDataFactory', applicationDataFactory])
.factory('featureGroupFactory', ['serverDataFactory', featureGroupFactory])
.factory('featureFactory', ['serverDataFactory', featureFactory])
.directive('subNav', subNav)
.directive('createFeatureGroup', ['$window', createFeatureGroup])
.directive('createFeature', ['$window', createFeature])
.directive('customDropdown', customDropdown)
.controller('AddFeature', ['applicationDataFactory','featureGroupFactory', 'featureFactory',  AddFeature])