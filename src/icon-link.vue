<style>
.icon-link img.icon {
    width:16px;
    height:16px;
}
</style>

<template>
    <div class="icon-link">
        <a href="{{link_url}}" title="{{name}}">
        <img class="icon" v-attr="src:icon_url" />
        {{link_text}}
        </a>
    </div>
</template>

<script>
module.exports = {
    props: ["$data"],
};
</script>
