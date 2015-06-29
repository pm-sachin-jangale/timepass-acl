export default function rolesFactory (serverDataFactory) {
    var url = '/castrum/roles',
    resource = serverDataFactory.getResource(url, { id: '@id' });

    return {
    	createRole: _createRole,
        getRolesList: _getRolesList,
        getRoleInformation: _getRoleInformation
    };

    /*
    Request - 
    {
        "name": "PubMatic Admin",
        "description": "PubMatic admin role",
        "application": {
            "id": 2,
            "name": "Phoenix",
            "description": "This is Phoenix"
        },
       "active": 1
    }


	Response -
    {
       "id": 1,
       "name": "PubMatic Admin",
       "description": "PubMatic admin role",
       "application":
       {
           "id": 2,
           "name": "Phoenix",
           "description": "This is Phoenix"
       },
       "active": 1
    }
    */
	function _createRole (roleData, callback) {
    	return resource.save(roleData, callback);
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
    function _getRolesList (callback) {
    	//return resource.get({applicationID: appid}, callback);
        return resource.query(callback);
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
    function _getRoleInformation (roleID, callback) {
    	return resource.get({id: roleID}, callback);
    }
}