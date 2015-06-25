export var pageTitleProvider = function () {
    var defaultTitle;
    
    this.$get = ['$rootScope', '$window', PageTitleService];
    
    this.setDefault = function (value) {
        defaultTitle = value;   
    }
    
    function PageTitleService($rootScope, $window) {
        var _currentTitle;
        function _get() {
            return $window.document.title;
        }
 
        function _set(value) {
            _currentTitle = value || defaultTitle;
            $window.document.title = _currentTitle;
        }
     
        if (defaultTitle) {
            $window.document.title = defaultTitle;
        } else {
            defaultTitle = $window.document.title;
        }

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            var _pageTitle;
            if (toState) {
                _pageTitle = toState.pageTitle || null;
            }
            _set(_pageTitle);
        });
 
        return {
            getTitle: _get,
            setTitle: _set
        }
    }
};