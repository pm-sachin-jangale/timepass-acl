import Login from './login.controller';
import loginRoute from './login.route';

export var LoginModule = angular.module('login', [
    
])
.config(['$stateProvider', '$resourceProvider', loginRoute])
.controller('Login', Login)