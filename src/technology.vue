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
                Perl: "//www.perl.org/favicon.ico",
                Mojolicious: "//mojolicio.us/favicon.ico",
                MySQL: "//www.google.com/s2/favicons?domain=mysql.com",
                memcached: "//www.drupal.org/files/images/memcache_logo.png",
                travisCI: "//travis-ci.com/img/brand-standards/logo-downloads/TravisCI-Full-Color-vertical.png",
                "Objective-C": "//cdn.dev.classmethod.jp/wp-content/uploads/2014/09/icon-xcode-6-320x320.png",
                javascript: "//upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/200px-Unofficial_JavaScript_logo_2.svg.png",
                "Chrome extension": "//www.calstate.edu/images/icons/chrome_web_store_logo.gif",
                "vue.js": "//jp.vuejs.org/images/logo.png",
                webpack: "//webpack.js.org/6bc5d8cf78d442a984e70195db059b69.svg",
                karma: "//cldup.com/0286W-2y27.png",
                npm: "//www.npmjs.com/favicon.ico",
                "Ruby on Rails": "//rubyonrails.org/favicon.ico",
                Heroku: "//pbs.twimg.com/profile_images/2343972517/heroku-logo-for-facebook_normal.png",
                PostgreSQL: "//upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
                bitcoin: "//upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/64px-Bitcoin.svg.png",
                GoogleAnalytics: "//saketorock.com/wp-content/uploads/2014/10/analytics.png",
                Ruby: "//www.ruby-lang.org/favicon.ico",
                Chef: "//www.chef.io/favicon.ico"
            }
        }
    },
    props: ["id"],
};
</script>
