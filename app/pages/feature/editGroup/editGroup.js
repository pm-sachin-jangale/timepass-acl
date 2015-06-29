import editGroupRoute from './editGroup.route';
import EditGroup from './editGroup.controller';

export var editGroupModule = angular.module('editGroup', [
    
])
.config(['$stateProvider', '$resourceProvider', editGroupRoute])
.controller('EditGroup', ['applicationDataFactory', 'featureGroupFactory', '$state', EditGroup])