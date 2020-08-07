const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

// PostCss
const autoprefixer = require('autoprefixer');
const postcssVars = require('postcss-simple-vars');
const postcssImport = require('postcss-import');

module.exports = {
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'www'),
        host: 'localhost',
        port: process.env.PORT || 8888,
        proxy: {
            '/api': {
                target: 'http://tch.dev.uboxol.com/', // 后台服务地址以及端口号
                // ws: true,
                changeOrigin: true, //是否跨域
                pathRewrite: { '^/api': '/' },
                disableHostCheck: true
            }
        },
    },
    entry: {
        index: './src/playground/index.js',
        error: './src/error.js',
        'lib.min': ['react', 'react-dom', 'redux', 'react-redux', 'react-router-dom'],
    },
    output: {
        // library: 'tch_h5',
        filename: '[name].js',
        chunkFilename: 'chunks/[name].js',
        path: path.resolve(__dirname, 'www'),
    },
    resolve: {
        symlinks: false,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'lib.min'
        },
        runtimeChunk: {
            name: 'lib.min'
        }
    },
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.(gif|png|svg|jpg|ico)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: './asset/img/[name].[ext]',
                        esModule: false,
                    }
                },
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: function () {
                            return [
                                postcssImport,
                                postcssVars,
                                autoprefixer,
                            ];
                        },
                    },
                }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'less-loader'
                }
                ]
            },
            {
                exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.js(x)?$/],
                test: /\.js(x)?$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                options: {
                    presets: ['react-app'],
                },
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                use: 'file-loader'
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '同城惠 H5',
            template: './src/index.ejs',
            chunks: ['lib.min', 'index'],
        }),
        new HtmlWebpackPlugin({
            title: 'Error',
            template: './src/index.ejs',
            chunks: ['lib.min', 'error'],
            filename: 'error.html',
        }),
    ],
};