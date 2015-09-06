<style>
img.profile-icon {
    width: 32px;
    height: 32px;
}
</style>

<template>
    <div class="profile">
        {{name}}
        <img class="profile-icon" v-attr="src:icon_url" />
        {{birthday}}

        <h3>likes</h3>

<li v-repeat="like">{{$value}}</li>

        <h3>links</h3>
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
