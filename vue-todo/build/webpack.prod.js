// 导入 webpack-merge
const { merge } = require('webpack-merge')
// 导入公共配置
const baseConfig = require('./webpack.base.js')

// 生产环境特有配置
const prodConfig = {
    // 打包模式
    mode: 'production'
}

module.exports = merge(baseConfig, prodConfig)