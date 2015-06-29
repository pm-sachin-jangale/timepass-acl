let applicationFactory = null, rolesFactory = null, $state;
export default class RoleController {
    constructor(applicationDataFactory, rolesDataFactory, state) {
        let vThis = this,
        applicationList = [];
        vThis.selectedElement = null;

        $state = state;
        rolesFactory = rolesDataFactory;
        applicationFactory = applicationDataFactory;
        applicationList = applicationDataFactory.getApplicationList(vThis.onFetchApplicationList.bind(vThis));
        
        if (applicationList.hasOwnProperty('items')) {
            vThis.onFetchApplicationList();
        }
    }

    onFetchApplicationList () {
        let vThis = this;
        vThis.selectedElement = applicationFactory.getSelectedPortal();
    }

    addRole () {
        $state.go('createrole');
    }

    goToAddFeature () {
        $state.go('addfeature');
    }
}