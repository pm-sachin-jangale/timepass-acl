import template from './addfeature.html!text';
import css from './addfeature.css!css';

export default function addFeatureRoute($stateProvider, $resourceProvider) {
    return $stateProvider.state('addfeature', {
        url: '/',
        template: template,
        controller: 'AddFeature',
        controllerAs: 'addFeature'
    });
}
