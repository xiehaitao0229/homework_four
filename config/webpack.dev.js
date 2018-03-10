const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin'); //监控浏览器自动更新
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//引用离线包插件
const Manifest = require('webpack-manifest');
module.exports = {
    entry: {
        index: [
            path.join(__dirname, '../src/public/scripts/index.es'),
            path.join(__dirname, '../src/public/scripts/indexadd.js')
        ],
        tag: [
            path.join(__dirname, '../src/public/scripts/tag.es'),
            path.join(__dirname, '../src/public/scripts/star.es')
        ]
    },
    output: {
        filename: 'public/scripts/[name]-[hash:5].js',
        path: path.join(__dirname, '../build/')
    },
    module: {
        loaders: [
            {
                test: /\.es$/,
                exclude: /(node_modules|bower_components)/,
                loaders: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-0']
                    }
                }
            }, {
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"dev"'
            }
        }),

        new LiveReloadPlugin({appendScriptTag: true}), //将<LiveReload>的script自动加入<head>中
        new ExtractTextPlugin(
        /* "public/css/[name]-[hash:5].css" */
        "public/css/[name].css"),
        new webpack
            .optimize
            .CommonsChunkPlugin({
                name: 'vendor',
                /* filename: 'public/scripts/common/vendor-[hash:5].min.js' */
                filename: 'public/scripts/common/[name].js'
            }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: './views/layout.html',
            template: 'src/widget/layout.html',
            inject: false
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: './views/index.html',
            template: 'src/views/index.js',
            inject: false,
            chunks: ['vendor', 'index', 'tag']
        }),
        new HtmlWebpackPlugin({ // Also generate a test.html
            filename: './widget/index.html',
            template: 'src/widget/index.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: './views/star.html',
            template: path.join(__dirname, '../src/views/star.js'),
            inject: false,
            chunks: ['vendor', 'index', 'tag']
        }),
        new HtmlWebpackPlugin({
            filename: './views/star.html',
            template: path.join(__dirname, '../src/widget/star.html'),
            inject: false
        }),
        //在 plugins 插件配置里面添加代码
        new Manifest({
            cache: [
                '../public/css/vendor.css', '../public/scripts/common/vendor.min.js', '../public/scripts/index.js', '../public/scripts/tags.js'
            ],
            //Add time in comments.
            timestamp: true,
            // 生成的文件名字，选填 The generated file name, optional.
            filename: 'cache.manifest',
            // 注意*星号前面用空格隔开
            network: [
                'http:////cdn.bootcss.com/ *', 'http://localhost:35729/livereload.js'
            ],
            // 注意中间用空格隔开 fallback: ['/ /404.html'], manifest 文件中添加注释 Add notes to manifest
            // file.
            headcomment: "koatesting",
            master: ['../build/layout.html']
        })
    ]
}