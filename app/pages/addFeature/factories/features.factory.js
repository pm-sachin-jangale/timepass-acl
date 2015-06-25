export default function featureFactory (serverDataFactory) {
    var url = 'castrum/feature/:id',
    resource = serverDataFactory.getResource(url, { id: '@id'});

    return {
        createFeature: _createGroup,
        getFeaturesList: _getFeatureList,
        getFeatureInformation: _getFeatureInformation
    };

    /*
        Request JSON - 
        {
            "name": "Blocklist Manager",
            "description": "Blocklist Manager",
            "featureGroups": [
                {
                    "id": 1,
                    "name": "BrandControl"
                }
            ],
            "resourceType": {
                "id": 1,
                "name": "Publisher"
            },
            "controlType": 2
        }

        Response JSON - 
        {
            "id":1,
            "name": "Blocklist Manager",
            "description": "Blocklist Manager",
            "featureGroups": [
                {
                    "id": 1,
                    "name": "BrandControl"
                }
            ],
            "resourceType": {
                "id": 1,
                "name": "Publisher"
            },
            "controlType": 2
        }
    */

    function _createGroup (featureData) {
        return resource.save(featureData);
    }


    /*
    Response JSON - 
    items: [   
    {
        "id":1,
        "name": "Blocklist Manager",
        "description": "Blocklist Manager",
        "featureGroups": [
            {
                "id": 1,
                "name": "BrandControl"
            }
        ],
        "resourceType": {
            "id": 1,
            "name": "Publisher"
        },
        "controlType": 2
    }]
    */

    function _getFeatureList () {
        return resource.query();
    }

    /*
    Response JSON - 
    {
        "id": 1,
        "name": "Blocklist Manager",
        "description": "Blocklist Manager",
        "featureGroups": [
            {
                "id": 1,
                "name": "BrandControl"
            }
        ],
        "resourceType": {
            "id": 1,
            "name": "Publisher"
        },
        "controlType": 2
    }
    */
    function _getFeatureInformation (groupID) {
        return resource.get({id: groupID})
    }
}