import 'angular-resource';

import { addFeatureModule } from 'pages/feature/addFeature/addFeature';
import { pageTitleProvider } from 'services/config/pageTitleProvider';
import { authInterceptorProvider } from 'services/config/authinterceptor';
import { topNavigation } from 'directives/navigation/topNavigation';
import { footerNav } from 'directives/navigation/footer';
import serverDataFactory from 'services/serverdata.factory';

export var mainModule = angular.module('app', [
    'pmcc',
    'ui.router',
    'ngResource',
    addFeatureModule.name
])
    //.config(['$locationProvider', ($locationProvider) => $locationProvider.html5Mode(true)])
    .config(config)
    .run(run)
    .provider('pageTitle', pageTitleProvider)
    .provider('authInterceptor', authInterceptorProvider)
    .factory('serverDataFactory', ['$resource', serverDataFactory])
    .directive('topNavigation', topNavigation)
    .directive('footerNav', footerNav)

config.$inject = ['pageTitleProvider', '$httpProvider']
function config (pageTitleProvider, $httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
    pageTitleProvider.setDefault("ACL");
    //$locationProvider.html5Mode(true);
}

run.$inject = ['pageTitle','authInterceptor']
function run (pageTitle, authInterceptor) {

}
