import template from './home.html!text';
import css from './home.css!css';

export default function rolesHomeRoute($stateProvider, $resourceProvider) {
    return $stateProvider.state('rolesHome', {
        url: '/roles/home',
        template: template,
        controller: 'RoleController',
        controllerAs: 'roleController'
    });
}
