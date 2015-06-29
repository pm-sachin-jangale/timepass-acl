import addFeatureRoute from './addFeature.route';
import AddFeature from './addFeature.controller';

import { subNav } from '../directives/subnav';
import { customDropdown } from '../../../directives/dropdown/dropdown';
import featureGroupFactory from '../factories/featuregroup.factory';
import featureFactory from '../factories/features.factory';
import applicationDataFactory from '../../../services/applicationdata.factory';

import { editFeatureModule } from '../editFeature/editFeature';
import { editGroupModule } from '../editGroup/editGroup';

export var addFeatureModule = angular.module('addFeature', [
	editFeatureModule.name,
	editGroupModule.name    
])
.config(['$stateProvider', '$resourceProvider', addFeatureRoute])
.factory('applicationDataFactory', ['serverDataFactory', applicationDataFactory])
.factory('featureGroupFactory', ['serverDataFactory', featureGroupFactory])
.factory('featureFactory', ['serverDataFactory', featureFactory])
.directive('customDropdown', customDropdown)
.directive('subNav', subNav)
.controller('AddFeature', ['applicationDataFactory','featureGroupFactory', 'featureFactory', '$state', AddFeature])