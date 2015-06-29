import editFeatureRoute from './editFeature.route';
import EditFeature from './editFeature.controller';

export var editFeatureModule = angular.module('editFeature', [
    
])
.config(['$stateProvider', '$resourceProvider', editFeatureRoute])
.controller('EditFeature', ['applicationDataFactory', 'featureFactory', 'featureGroupFactory', '$state', EditFeature])