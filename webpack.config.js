const path = require('path');

module.exports = {
    mode: 'production', //"production" | "development" | "none" 開發模式
    entry: './src/index.js', //來源檔案
    output: {
        path: path.resolve(__dirname, 'new_project'),
        filename: 'scripts.js'
      }, // 出口文件
      
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: 'style-loader' //(順序2)
                },
                {
                    loader: 'css-loader', //(順序1)
                    options: {
                        modules: true
                    }
                }]
        }]
    },
    // plugins: []
   };