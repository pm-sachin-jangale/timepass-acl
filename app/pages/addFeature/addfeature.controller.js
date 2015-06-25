export default class AddFeature {
    constructor(applicationDataFactory, featureGroupFactory, featureFactory) {
        let vThis = this;

        vThis.featureGroupFactory = featureGroupFactory;
        vThis.applicationDataFactory = applicationDataFactory;
        vThis.featureFactory = featureFactory;

        vThis.applicationList = applicationDataFactory.getApplicationList(vThis.onFetchApplicationList.bind(vThis));
        //vThis.featureList = featureFactory.getFeaturesList();

        vThis.isEmpty = false;
        vThis.selectedElement = null;
        vThis.showFeatureGroup = false;
        vThis.showFeature = false;         
    }

    onFetchApplicationList () {
        let vThis = this;
        vThis.selectedElement = vThis.applicationList.items[1];
        vThis.getFeatureGroupList();    
    }

    onFetchFeatureGroupList () {
        let vThis = this;
        vThis.isEmpty = vThis.featureGroupList.length > 0;
    }

    onChangePortal (portal) {
        let vThis = this;
        vThis.selectedElement = portal;
        vThis.getFeatureGroupList()
    }

    getFeatureGroupList () {
        let vThis = this;
        vThis.featureGroupList = vThis.featureGroupFactory.getGroupsList(vThis.selectedElement.id, vThis.onFetchFeatureGroupList.bind(vThis));
        console.log(vThis.featureGroupList);
    }

    createFeatureGroup () {
        this.showFeatureGroup = true;   
    }

    createFeature () {
        this.showFeature = true;    
    }

    callbackFeatureGroup (data) {
        let vThis = this;
        data.applications = [vThis.selectedElement];

        vThis.showFeatureGroup = false;
        vThis.featureGroupFactory.createGroup(data, vThis.onGroupCreated.bind(vThis));
    }

    callbackGroup () {
        this.showFeature = false;   
    }

    onGroupCreated (data) {
        this.featureGroupList.items.push(data);
    }
}