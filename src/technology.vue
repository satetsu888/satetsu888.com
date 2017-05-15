<style>
div.technology {
    width: 75%;
}
.technology img {
    width: 20px;
    height: 20px;
    position: absolute;
}
span.technology {
    position: relative;
}
span.technology span.text {
    padding-left:22px;
}
</style>

<template>
    <span class="technology">
        <img class="icon" :src="this.icon_url[id]" />
        <span class="text">{{id}}<span>
    </span>
</template>

<script>
module.exports = {
    data: function(){
        return {
            icon_url: {
                Perl: "./img/perl.ico",
                Mojolicious: "./img//mojolicious.ico",
                MySQL: "./img/mysql.png",
                memcached: "./img/memcached.png",
                travisCI: "./img/travis.svg",
                "Objective-C": "./img/obj-c.png",
                javascript: "./img/javascript.png",
                "Chrome extension": "./img/chrome.gif",
                "vue.js": "./img/vuejs.png",
                webpack: "./img/webpack.svg",
                karma: "./img/karma.png",
                npm: "./img/npm.ico",
                "Ruby on Rails": "./img/ror.ico",
                Heroku: "./img/heroku.png",
                PostgreSQL: "./img/postgres.png",
                bitcoin: "./img/bitcoin.png",
                GoogleAnalytics: "./img/google-analytics.png",
                Ruby: "./img/ruby.ico",
                Chef: "./img/chef.png"
            }
        }
    },
    props: ["id"],
};
</script>
