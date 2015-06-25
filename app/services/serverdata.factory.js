export default function serverDataFactory ($resource) {
    return {
        getResource: _getResource
    };

    function _getResource (url, object) {
        return $resource(url, object, {
            update: {
              method: 'PUT'
            }
        });
    }
}