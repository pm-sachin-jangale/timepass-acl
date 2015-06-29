let applicationFactory = null, rolesFactory = null;
export default class CreateRole {
    constructor(applicationDataFactory, rolesDataFactory, $state) {
        let vThis = this,
        applicationList = [];
        
        vThis.$state = $state;
        vThis.selectedElement = null;

        vThis.role = {name: '', description: '', active: 1};

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
        vThis.role.application = vThis.selectedElement;
    }

    cancelClick () {
        this.goToAddFeature();
    }

    saveClick () {
        let vThis = this;
        rolesFactory.createRole(vThis.role, vThis.onRoleCreated.bind(vThis));
    }

    onRoleCreated () {
        console.log("role created");
    }

    goToAddFeature () {
    	let vThis = this;
        vThis.role = {name: '', description: '', active: 1};  
        vThis.$state.go('addfeature');
    }
}