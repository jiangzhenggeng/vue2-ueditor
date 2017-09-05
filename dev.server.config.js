

var common = require('./webpack.common');

common.devtool = '#cheap-module-source-map';

common.devServer = {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: "./dist", //最好写上，否则报错，难道这里是一个坑？
    port: 8080,
    setup(app){  //模拟数据
        app.get('/getJSON', function(req, res) {
            res.json({ name: 'vajoy' });
        });
    },
    proxy: {
        '/api': {
            target: 'http://m.jiguo.com',
            secure: true,
            changeOrigin: true
        },
        '/UEditor/php': {
            target: 'http://www.jiguo.com',
            secure: true,
	        pathRewrite: {
                '^/UEditor/php' : '/protected/extensions/ueditor/php'
            },
	        changeOrigin: true
        }
    }
};

common.output.publicPath = '';

module.exports = common;




