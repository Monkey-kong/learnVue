// 使用 node 的 path 模块
const path = require('path')

// 引入 vue-loader 插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 引入 html-webpack-plugin 插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入 clean-webpack-plugin 插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 打包模式
    mode: 'development',
    // 打包的入口
    entry: './src/main.js',
    devServer: {
        contentBase: './dist',
        open: true
    },    
    // 打包的出口
    output: {
        filename: 'app.js',
        // resolve? __dirname??
        path: path.resolve(__dirname, 'dist')
    },
    // 打包规则
    module: {
        rules: [
            {
                // .vue 文件用 vue-loader 打包
                test: /\.vue$/,
                loader: 'vue-loader'
            },{
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 4096
                }                
            },{
                test: /\.css$/,
                // 配置两个 loader 打包 css 文件
                // 顺序从右到左，从下到上
                use: ['style-loader', 'css-loader']
            },{
                test: /\.styl(us)?$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
            }
        ]
    },
    plugins: [
        // 引入 vue-loader 插件
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}