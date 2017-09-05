
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var tools = require('./tools');
var common = require('./webpack.common');
var dev_config = require('./dev.server.config');

common = tools.extend(common,dev_config);

common.plugins = [
    ...common.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        template:'!!ejs-loader!src/index.php',
        favicon: './src/style/images/favicon.ico',
        filename:'index.html',
    }),
];

module.exports = common;




