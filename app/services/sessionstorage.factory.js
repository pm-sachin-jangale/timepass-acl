var sessionStorageService = function () {
    var authToken,
        apiAuthKey,
        apiAuthValue;

    return {
        init: _init,
        start: _start,

        getPubToken: _getPubToken,
        getAuthToken: _getAuthToken,
        getAPIKey: _getAPIKey,
        getApiAccessToken: _getApiAccessToken,
        getUserDetails: _getUserDetails,
        
        setAuthToken: _setAuthToken,
        setAPIKey: _setAPIKey,
        setApiAcessKey: _setApiAcessKey,
        setUserDetails: _setUserDetails 
    }

    function _init (obj, isAdmin) {
        authToken = obj.sessionId; //keeping auth token in memory
        apiAuthKey = obj.apiAuthKey;
        apiAuthValue = obj.apiAuthValue;

        _setAPIKey(obj.apiKey);
        if (isAdmin) {
            sessionStorage.setItem('isAdmin', 'true');
        }
        sessionStorage.setItem('aclUser', JSON.stringify(obj.user));
        sessionStorage.setItem('analyticsMatrixUrl', obj.analyticsMatrixUrl);
    }

    function _start (obj) {
        var userObj = obj.user,
            userId;

        _setAuthToken(authToken); //persisting authToken
        if (userObj) {
            userId = userObj.userId;
        }
        _setApiAcessKey(apiAuthKey, apiAuthValue);
        _setUserDetails(userObj);
        sessionStorage.setItem('userId', userId);
    }

    function _getAuthToken () {
        var authToken = authToken || sessionStorage.getItem('authToken');

        return authToken;
    }

    // To be used by REST API
    function _getPubToken () {
        var pubToken = 'adminuser';
        // TODO
        // Add logic to get Pub-User specific token on
        return pubToken;
    }

    function _getAPIKey () {
        var apiKey = sessionStorage.getItem('apiKey');
        return apiKey
    }

    function _getApiAccessToken () {
        var authKeyValue = sessionStorage.getItem('apiAccessKey') || '',
            returnObj = {};
        if (authKeyValue) {
            returnObj = {
                'apiAuthKey': authKeyValue.split('::')[0] || '',
                'apiAuthValue': authKeyValue.split('::')[1] || ''
            };
        }
        return returnObj;
    }

    function _getUserDetails () {
        var oThis = this,
            info = sessionStorage.getItem('info');

        return JSON.parse(info);
    }

    function _setAuthToken(token) {
        if (token == null || !(/[0-9A-Z]{32}/.test(token))) {
            throw new Error('Invalid authToken passed to setAuthToken()');
        } else {
            authToken = token;
            sessionStorage.setItem('authToken', token);
        }
    }

    function _setAPIKey(key) {
        if (key) {
            sessionStorage.setItem('apiKey', key);
        }
    }

    function _setApiAcessKey(key, value) {
        if (key && value) {
            sessionStorage.setItem('apiAccessKey', key + '::' + value);
        }
    }

    function _setUserDetails(info) {
        var username = info.firstName + ' ' + info.lastName;

        // items used in old publisher pages
        sessionStorage.setItem('userId', info.publisherId);
        sessionStorage.setItem('email', info.email);
        sessionStorage.setItem('signedInName', username);
        sessionStorage.setItem('info', JSON.stringify(info));
    }
}