import template from './editFeature.html!text';
import css from './editFeature.css!css';

export default function editFeatureRoute($stateProvider, $resourceProvider) {
    return $stateProvider.state('editfeature', {
        url: '/editfeature',
        template: template,
        controller: 'EditFeature',
        controllerAs: 'editFeature'
    });
}
