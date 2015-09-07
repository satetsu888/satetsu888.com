<style>
div.profile {
    margin: 10% 2em 0;
}
.profile h1 {
    font-size: initial;
    display: inline;
}
.profile h2 {
    font-size: initial;
}
img.profile-icon {
    width: 32px;
    height: 32px;
}
</style>

<template>
    <div class="profile">
        <h1>{{name}}</h1>
        <img class="profile-icon" v-attr="src:icon_url" />

        <h2>likes</h2>

        <li v-repeat="like">{{$value}}</li>

        <h2>links</h2>
        <icon-link-component v-repeat="links"></icon-link-component>
    </div>
</template>

<script>
module.exports = {
    props: ["$data"],
    components: {
        'icon-link-component': require('./icon-link.vue'),
    }
};
</script>
