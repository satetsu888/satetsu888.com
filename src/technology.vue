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
        <img class="icon" v-attr="src:icon_url[id]" />
        <span class="text">{{id}}<span>
    </span>
</template>

<script>
module.exports = {
    data: function(){
        return {
            icon_url: {
                Perl: "http://www.perl.org/favicon.ico",
                Mojolicious: "http://mojolicio.us/favicon.ico",
                MySQL: "http://www.google.com/s2/favicons?domain=mysql.com",
                memcached: "http://www.drupal.org/files/images/memcache_logo.png",
                travisCI: "http://travis-ci.com/img/brand-standards/logo-downloads/TravisCI-Full-Color-vertical.png",
                "Objective-C": "http://cdn.dev.classmethod.jp/wp-content/uploads/2014/09/icon-xcode-6-320x320.png",
                javascript: "https://cozy.io/assets/images/javascript_logo.png",
                "Chrome extension": "http://www.calstate.edu/images/icons/chrome_web_store_logo.gif",
                "vue.js": "http://jp.vuejs.org/images/logo.png",
                webpack: "http://reactweek.com/images/webpack.png",
                karma: "http://cldup.com/0286W-2y27.png",
                npm: "http://www.npmjs.com/favicon.ico",
                "Ruby on Rails": "http://rubyonrails.org/favicon.ico",
                Heroku: "http://pbs.twimg.com/profile_images/2343972517/heroku-logo-for-facebook_normal.png",
                PostgreSQL: "http://www.scalient.net/assets/icon_postgresql-db373684bd8a11b72b9223787fb71f10.png",
                bitcoin: "http://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/64px-Bitcoin.svg.png",
                GoogleAnalytics: "http://saketorock.com/wp-content/uploads/2014/10/analytics.png",
                Ruby: "http://www.ruby-lang.org/favicon.ico",
                Chef: "http://www.chef.io/favicon.ico"
            }
        }
    },
    props: ["id"],
};
</script>
