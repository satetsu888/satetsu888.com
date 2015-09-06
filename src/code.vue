<style>
</style>

<template>
    <div class="code">
        <h3><a href={{url}}>{{title}}</a></h3>
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
