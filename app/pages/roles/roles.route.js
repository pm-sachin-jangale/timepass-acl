export default function rolesRoute($stateProvider) {
    return $stateProvider.state('roles', {
        url: '/roles',
        abstract: true
    });
}
