const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const glob = require('glob')

console.log('globbing')
let files = glob.sync('./pages/**/index.tsx')
files = files.map(function (file) {
    let name = file
    name = name.replace('/index.tsx', '')
    name = name.replace('./pages/', '')
    name = name + '/index.html'
    return name
})
files.push('index.html')

const htmlPlugins = files.map(function (file) {
    return new HtmlWebpackPlugin({
        title: 'Production',
        template: './root/index.html',
        filename: file
        // favicon: './assets/imgs/favicon.ico'
    })
})

for (var i = 0; i < files.length; i++) {
    console.log(files[i])
}

module.exports = {
    entry: ['./root/root.tsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        chunkFilename: 'chunks/[id].[chunkhash].js',
        publicPath: '/'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        },
        {
            test: /\.(tsx|ts)$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader',
            }
        },
        {
            test: /\.html$/,
            use: {
                loader: 'html-loader',
                options: { minimize: true }
            }
        },
        {
            test: /\.(scss|css)$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.(png|jpg|gif|pdf|ico)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            ]
        }]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/!(*CNAME)'], {
            verbose: true,
            dry: false
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ].concat(htmlPlugins),

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}