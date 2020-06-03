const path = require('path');

module.exports = {
    mode: 'production', //"production" | "development" | "none" 開發模式
    entry: './src/index.js', //來源檔案
    output: {
        path: path.resolve(__dirname, 'new_project'),
        filename: 'scripts.js'
      }, // 出口文件
      
    // module: {},
    // plugins: []
   };