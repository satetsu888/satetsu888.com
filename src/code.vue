<style>
div.code {
    padding: 5% 1em 5%;
    color: #56443E;
    background-color : #F9B19A;
}
div.code.odd {
    background-color : #C18472;
}
.code .code-header {
    display: block;
}
.code h2 {
    font-size: larger;
}
.code h3 {
    font-size: inherit;
}
.code .code-content {
    padding: 0 1em 0;
}
.code .button-xsmall {
    font-size: 75%;
}
</style>

<template>
    <div class="code" v-class="odd: !($index%2)">
        <div class="code-header">
        <h2>{{title}}</h2>
        </div>
        <div class="code-content">
            <p>
                <h3>description</h3>
                {{{description}}}
            </p>
            <p>
                <h3>technologies</h3>
                <technology-component v-repeat="id in technologies"></technology-component>
            </p>
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
