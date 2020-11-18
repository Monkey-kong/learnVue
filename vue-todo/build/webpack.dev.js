// 引入 webpack
const webpack = require('webpack')
// 导入 webpack-merge
const { merge } = require('webpack-merge')
// 导入公共配置
const baseConfig = require('./webpack.base.js')

// 开发环境特有配置
const devConfig = {
    // 打包模式
    mode: 'development',
    // devServer 配置
    devServer: {
        // 指定服务器根目录
        contentBase: './dist',
        // 自动打开浏览器
        open: true,
        // 启用热模块替换
        hot: true
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        // 热模块替换插件
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(baseConfig, devConfig)