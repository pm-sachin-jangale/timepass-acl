import template from './editGroup.html!text';
import css from './editGroup.css!css';

export default function editGroupRoute($stateProvider, $resourceProvider) {
    return $stateProvider.state('editgroup', {
        url: '/editgroup',
        template: template,
        controller: 'EditGroup',
        controllerAs: 'editGroup'
    });
}
