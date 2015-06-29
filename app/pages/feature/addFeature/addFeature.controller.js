export default class AddFeature {
    constructor(applicationDataFactory, featureGroupFactory, featureFactory, $state) {
        let vThis = this;
        
        vThis.isEmpty = false;
        vThis.selectedElement = null;

        vThis.$state = $state;
        vThis.featureGroupFactory = featureGroupFactory;
        vThis.applicationDataFactory = applicationDataFactory;
        vThis.featureFactory = featureFactory;

        vThis.applicationList = applicationDataFactory.getApplicationList(vThis.onFetchApplicationList.bind(vThis));
        
        if (vThis.applicationList.hasOwnProperty('items')) {
            vThis.onFetchApplicationList();
        }
        //vThis.featureList = featureFactory.getFeaturesList();
    }

    onFetchApplicationList () {
        let vThis = this;
        vThis.selectedElement = vThis.applicationDataFactory.getSelectedPortal();
        vThis.getFeatureGroupList();    
    }

    onFetchFeatureGroupList () {
        let vThis = this;
        vThis.isEmpty = vThis.featureGroupList.length > 0;
    }

    onChangePortal (portal) {
        let vThis = this;
        vThis.selectedElement = portal;
        vThis.applicationDataFactory.setSelectedPortal(portal);
        vThis.getFeatureGroupList()
    }

    getFeatureGroupList () {
        let vThis = this;
        vThis.featureGroupList = vThis.featureGroupFactory.getGroupsList(vThis.selectedElement.id, vThis.onFetchFeatureGroupList.bind(vThis));
    }

    createFeatureGroup () {
        this.$state.go('editgroup');
    }

    createFeature () {
        this.$state.go('editfeature');    
    }

    /*callbackGroup () {
        this.showFeature = false;   
    }*/

    /*onGroupCreated (data) {
        this.featureGroupList.items.push(data);
    }*/
}