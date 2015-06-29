export default function featureGroupFactory (serverDataFactory) {
    var url = '/castrum/featureGroups?applicationId=:applicationID',
    resource = serverDataFactory.getResource(url, { applicationID: '@applicationID' });

    return {
    	createGroup: _createGroup,
        getGroupsList: _getFeatureGroupList,
        getGroupInformation: _getFeatureGroupInformation
    };

    /*
    Request - 
    {
	    "name": "Inventory Management",
	    "description": "Inventory Management",
	    "applications": [
	        {
	            "id": 1,
	            "name": "SSP"
	        }
	    ]
	}

	Response - 
	    "id": 1,
	    "name": "Inventory Management",
	    "description": "Inventory Management",
	    "applications": [
	        {
	            "id": 1,
	            "name": "SSP",
	            "description": null
	        }
	    ]
    */
	function _createGroup (groupData, callback) {
    	return resource.save(groupData, callback);
    }


    /*
		"items": [
        {
            "id": 1,
            "name": "Inventory Management",
            "description": "Inventory Management",
            "applications": [
                {
                    "id": 1,
                    "name": "SSP",
                    "description": null
                }
            ]
        },
        {
            "id": 1,
            "name": "Network Management",
            "description": "Network Management",
            "applications": [
                {
                    "id": 2,
                    "name": "Phoenix",
                    "description": null
                }
            ]
        }
    ]
    */
    function _getFeatureGroupList (appid, callback) {
    	return resource.get({applicationID: appid}, callback);
    }

    /*
    {
	    "id": 1,
	    "name": "Inventory Management",
	    "description": "Inventory Management",
	    "applications": [
	        {
	            "id": 1,
	            "name": "SSP",
	            "description": null
	        }
	    ]
	}*/
    function _getFeatureGroupInformation (groupID, callback) {
    	return resource.get({id: groupID}, callback);
    }
}