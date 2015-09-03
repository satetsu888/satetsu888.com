var Vue = require('vue')
new Vue({
    el: '#app',
    data: require('./data.js'),
    components: {
        'profile-component': require('./profile.vue'),
        'code-component': require('./code.vue')
    }
});
