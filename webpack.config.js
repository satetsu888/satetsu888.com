module.exports = {
    entry: "./src/main.js",
    output: {
        path: "./public/build",
        publicPath: "./build/",
        filename: "build.js"
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
        ]
    }
};
