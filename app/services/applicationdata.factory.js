export default function applicationDataFactory (serverDataFactory) {
    var url = '/castrum/applications/:id',
    resource = serverDataFactory.getResource(url, { id: '@id'});

    return {
        createApplication: _createApplication,
        getApplicationList: _getApplicationList,
        getApplicationInformation: _getApplicationInformation
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
    function _createApplication (applicationData) {
        return resource.save(applicationData);
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
        return resource.get(callback);
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
}