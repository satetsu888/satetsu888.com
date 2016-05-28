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
    border-radius: 20px;
    padding: 8px;
    background-color: #ffffff;
    display: block;
    box-sizing: initial;
}
</style>

<template>
    <div class="profile">
        <img class="profile-icon" :src="profile.icon_url" />
        <h1>{{profile.name}}</h1>
        <p>{{profile.biography}}</p>

        <h2>likes</h2>

        <li v-for="like in profile.like" :like="like">{{like}}</li>

        <h2>links</h2>
        <icon-link-component v-for="link in profile.links" :link="link"></icon-link-component>
    </div>
</template>

<script>
module.exports = {
    props: ["profile"],
    components: {
        'icon-link-component': require('./icon-link.vue'),
    }
};
</script>
