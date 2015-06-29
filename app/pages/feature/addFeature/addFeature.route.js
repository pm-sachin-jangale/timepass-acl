import template from './addFeature.html!text';
import css from './addFeature.css!css';

export default function addFeatureRoute($stateProvider, $resourceProvider) {
    return $stateProvider.state('addfeature', {
        url: '/',
        template: template,
        controller: 'AddFeature',
        controllerAs: 'addFeature'
    });
}
