<style>
</style>

<template>
    <div class="profile">
        <img v-attr="src:icon_url" />
        {{name}}
        {{like}}
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
