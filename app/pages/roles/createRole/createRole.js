import createRoleRoute from './createRole.route';
import CreateRole from './createRole.controller';

export var createRoleModule = angular.module('createRole', [
    
])
.config(['$stateProvider', '$resourceProvider', createRoleRoute])
.controller('CreateRole', ['applicationDataFactory', 'rolesFactory', '$state', CreateRole])