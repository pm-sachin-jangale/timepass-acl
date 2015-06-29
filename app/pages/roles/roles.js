import rolesFactory from './factories/roles.factory';

import rolesRoute from './roles.route';
import { createRoleModule } from './createRole/createRole';
import { rolesHomeModule } from './home/home';

export var rolesModule = angular.module('roles', [
    rolesHomeModule.name,
    createRoleModule.name
])
.config(['$stateProvider', '$resourceProvider', rolesRoute])
.factory('rolesFactory', ['serverDataFactory', rolesFactory])