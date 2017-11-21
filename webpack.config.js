
const path = require("path");
const autoprefixer = require("autoprefixer");
const LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve("static/build"),
        filename: "build.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
            { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: require.resolve('style-loader')
                    },
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: require.resolve('sass-loader'),
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9',
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                ]
            },
        ]
    },
    plugins: [new LiveReloadPlugin()]
};