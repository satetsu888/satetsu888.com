<style>
</style>

<template>
    <div class="code">
        <a href={{url}}>{{title}}</a>
        {{{description}}}
        
        <span v-if="code_url">
            <a href={{code_url}}>code</a>
        </span>
    </div>
</template>

<script>
module.exports = {
    props: ["$data"],
};
</script>
