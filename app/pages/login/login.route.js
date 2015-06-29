import template from './login.html!text';
import css from './login.css!css';

export default function loginRoute($stateProvider, $resourceProvider) {
    return $stateProvider.state('login', {
        url: '/login',
        template: template,
        controller: 'Login',
        controllerAs: 'login'
    });
}
