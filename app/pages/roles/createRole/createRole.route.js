import template from './createRole.html!text';
import css from './createRole.css!css';

export default function createRoleRoute($stateProvider, $resourceProvider) {
    return $stateProvider.state('createrole', {
        url: '/roles/create',
        template: template,
        controller: 'CreateRole',
        controllerAs: 'createRole'
    });
}
