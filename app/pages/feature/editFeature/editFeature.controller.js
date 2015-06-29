export default class EditFeature {
    constructor(applicationDataFactory, featureFactory, featureGroupFactory, $state) {
        let vThis = this;
        
        vThis.featureFactory = featureFactory;
        vThis.featureGroupFactory = featureGroupFactory;
        vThis.$state = $state;
        vThis.selectedElement = null;
        vThis.featureGroupList = [];
        vThis.switchModel = true;

        vThis.feature = {
            name: '', 
            description: '', 
            featureGroup: '', 
            resourceType: '',
            controlType: ''
        };

        vThis.applicationDataFactory = applicationDataFactory;
        vThis.applicationList = applicationDataFactory.getApplicationList(vThis.onFetchApplicationList.bind(vThis));

        if (vThis.applicationList.hasOwnProperty('items')) {
            vThis.onFetchApplicationList();
        }
    }

    onFetchApplicationList () {
        let vThis = this;
        vThis.selectedElement = vThis.applicationDataFactory.getSelectedPortal();
        vThis.getFeatureGroupList();
    }

    getFeatureGroupList () {
        let vThis = this;
        vThis.featureGroupList = vThis.featureGroupFactory.getGroupsList(vThis.selectedElement.id, vThis.onFetchFeatureGroupList.bind(vThis));
    }

    onFetchFeatureGroupList () {
        let vThis = this;
        vThis.featureGroupList = vThis.featureGroupList.items;
    }

    getSelectedFeatureGroup (value) {
        let vThis = this;
        vThis.feature.featureGroup = value;
    }

    getSelectedControlType (value) {
        vThis.feature.controlType = value;
    }

    onChangePortal (portal) {
        let vThis = this;
        vThis.selectedElement = portal;
        
        vThis.applicationDataFactory.setSelectedPortal(portal);
    }

    cancelClick () {
        let vThis = this;
        this.goToAddFeature();
    }

    saveClick () {
        
    }

    goToAddFeature () {
        let vThis = this;
        vThis.feature = {
            name: '', 
            description: '', 
            featureGroup: '', 
            resourceType: '',
            controlType: ''
        };
        vThis.$state.go('addfeature');
    }
}