export var authInterceptorProvider = function () {
    this.$get = [InterceptorService];

    function InterceptorService() {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                config.headers.PubToken = 'admin';
                return config;
            }
        }
    }
}