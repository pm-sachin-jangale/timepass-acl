import rolesHomeRoute from './home.route';
import RoleController from './home.controller';

export var rolesHomeModule = angular.module('rolesHome', [
    
])
.config(['$stateProvider', '$resourceProvider', rolesHomeRoute])
.controller('RoleController', ['applicationDataFactory', 'rolesFactory', '$state', RoleController])