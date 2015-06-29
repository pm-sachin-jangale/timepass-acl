export default class EditGroup {
    constructor(applicationDataFactory, featureGroupFactory, $state) {
        let vThis = this;
        
        vThis.featureGroupFactory = featureGroupFactory;
        vThis.$state = $state;
        vThis.selectedElement = null;
        
        
        vThis.group = {name: '', description: ''};

        vThis.applicationDataFactory = applicationDataFactory;
        vThis.applicationList = applicationDataFactory.getApplicationList(vThis.onFetchApplicationList.bind(vThis));
        
        if (vThis.applicationList.hasOwnProperty('items')) {
        	vThis.onFetchApplicationList();
        }
    }

    onFetchApplicationList () {
        let vThis = this;
        vThis.selectedElement = vThis.applicationDataFactory.getSelectedPortal();
    }

    onChangePortal (portal) {
        let vThis = this;
        vThis.selectedElement = portal;
        
        vThis.applicationDataFactory.setSelectedPortal(portal);
    }

    cancelClick () {
        this.goToAddFeature();
    }

    saveClick () {
        let vThis = this;
        vThis.group.applications = [vThis.selectedElement];
        vThis.featureGroupFactory.createGroup(vThis.group, vThis.onGroupCreated.bind(vThis));
    }

    onGroupCreated () {
    	this.goToAddFeature();
    }

    goToAddFeature () {
    	let vThis = this;
        vThis.group = {name: '', description: ''};  
        vThis.$state.go('addfeature');
    }
}