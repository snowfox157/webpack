const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production', //"production" | "development" | "none" 開發模式
    entry: './src/index.js', //來源檔案
    output: {
        path: path.resolve(__dirname, 'new_project'),
        filename: 'scripts.js'
      }, // 出口文件
      
    module: {
        rules: [{
            test: /\.(sass|scss|css)$/,//修改成sass可以讀的檔案
            use: [{
                loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it use publicPath in webpackOptions.output
                        publicPath: './dist'
                    }
                },
                {
                    loader: 'css-loader', //(順序1)
                    options: {
                        modules: true
                    }
                },
                {
                    loader:'sass-loader'
                }
            ]
        }]
    },
    plugins: [
        
        
        //清理舊的檔案
        new CleanWebpackPlugin(),

        //這個套件是載入 css 檔案                 
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "./css/[name].css"
        }),
        new HtmlWebpackPlugin({ //將html檔案打包成html
            title:'首頁',
            template: './src/index.html',
            //產生的檔案
            filename: 'index.html',
            minify: false, 
            inject:'head',
        })
    ]
   };