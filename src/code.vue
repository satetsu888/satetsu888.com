<style>
div.code {
    padding: 5% 1em 5%;
}
div.code.odd {
    background-color : #bbbbbb;
}
.code .code-header {
    display: block;
}
.code h2 {
    font-size: larger;
}
.code h3 {
    display: initial;
}
.code .button-xsmall {
    font-size: 75%;
}
</style>

<template>
    <div class="code" v-class="odd: !($index%2)">
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
        <p>
            {{{description}}}
        </p>
        <p>
            <h3>technologies</h3>
            <technology-component v-repeat="id in technologies"></span>
        </p>
    </div>
</template>

<script>
module.exports = {
    props: ["$data"],
    components: {
        'technology-component': require('./technology.vue'),
    }
};
</script>
