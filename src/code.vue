<style>
div.code {
    margin: 5% 2em 0;
}
.code .code-header {
    display: block;
}
.code h2 {
    display: inline;
    font-size: larger;
}
.code .button-xsmall {
    font-size: 75%;
}
</style>

<template>
    <div class="code">
        <div class="code-header">
        <h2>{{title}}</h2>
        <span v-if="url">
            <button class="button-xsmall pure-button" onclick="window.open('{{url}}')">
                <i class="fa fa-television"></i>
                View
            </button>
        </span>
        <span v-if="code_url">
            <button class="button-xsmall pure-button" onclick="window.open('{{code_url}}')">
                <i class="fa fa-github-alt"></i>
                View Code
            </button>
        </span>
        </div>
        {{{description}}}
        
    </div>
</template>

<script>
module.exports = {
    props: ["$data"],
};
</script>
