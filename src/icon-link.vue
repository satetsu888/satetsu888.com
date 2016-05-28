<style>
.icon-link img.icon {
    width:16px;
    height:16px;
}
</style>

<template>
    <div class="icon-link">
        <a href="{{link.link_url}}" target="_blank" title="{{link.name}}">
        <img class="icon" :src="link.icon_url" />
        {{link.link_text}}
        </a>
    </div>
</template>

<script>
module.exports = {
    props: ["link"],
};
</script>
