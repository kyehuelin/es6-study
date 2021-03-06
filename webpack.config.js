const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('@babel/register');

const config = {
    entry: ['@babel/polyfill', './src/index.ts'],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|csv)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            // {
            //     test: /\.csv$/,
            //     loader: 'csv-loader',
            //     options: {
            //       dynamicTyping: true,
            //       header: true,
            //       skipEmptyLines: true
            //     }
            //   },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            minify: {
                collapseWhitespace: false,
                preserveLineBreaks: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [path.resolve('./src'), path.resolve('./node_modules')]
    },
    node: { fs: 'empty' },
    devServer: {
        contentBase: __dirname + '/public',
        compress: true,
        port: 9000,
        open: true,
        stats: {
            assets: false,
            children: false,
            chunks: false,
            chunkModules: false,
            colors: true,
            entrypoints: false,
            hash: false,
            modules: false,
            timings: false,
            version: false
        }
    },
    watch: false,
    devtool: 'source-map'
};

module.exports = config;
