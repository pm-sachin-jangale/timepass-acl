export default function applicationDataFactory (serverDataFactory) {
    var url = '/castrum/applications/:id',
    resource = serverDataFactory.getResource(url, { id: '@id'}),
    applicationData = null, currentPortal = null;

    return {
        createApplication: _createApplication,
        getApplicationList: _getApplicationList,
        getApplicationInformation: _getApplicationInformation,
        setSelectedPortal: _setSelectedPortal,
        getSelectedPortal: _getSelectedPortal
    };

    /*
    Request - 
    {
        "name": "SSP",
        "description": "This is ssp application"
    }

    Response -
    {
        "id": 1,
        "name": "SSP",
        "description": "This is ssp application"
    }   
    */
    function _createApplication (data) {
        return resource.save(data);
    }


    /*
        "items": [
        {
            "id": 5,
            "name": "SSP",
            "description": "This is ssp application"
        },

        {
            "id": 6,
            "name": "Phoenix",
            "description": "This is ssp application"
        }
    ]
    */
    function _getApplicationList (callback) {
        if (applicationData !== null) {
            return applicationData;
        } else {
            return applicationData = resource.get(callback);    
        }
    }

    /*
    {
       "id": 1,
       "name": "SSP",
       "description": "This is ssp application"
    }
    */
    function _getApplicationInformation (applicationID) {
        return resource.get({id: applicationID})
    }

    function _getSelectedPortal () {
        if (currentPortal === null) {
            currentPortal = applicationData.items[1];
        }   
        return currentPortal;
    }

    function _setSelectedPortal (portal) {
        currentPortal = portal;
    }
}