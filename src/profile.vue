<style>
div.profile {
    margin: 15% 2em 10% ;
}
.profile h1 {
    font-size: larger;
    display: inline;
}
.profile p {
    font-size: small;
    color: #dddddd;
}
.profile h2 {
    font-size: initial;
}
img.profile-icon {
    width: 32px;
    height: 32px;
    border-radius: 17px;
    padding: 5px;
    background-color: #ffffff;
}
</style>

<template>
    <div class="profile">
        <h1>{{name}}</h1>
        <img class="profile-icon" v-attr="src:icon_url" />
        <p>{{biography}}</p>

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
