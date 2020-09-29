const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    module: {
      rules: [{
        test: /\.html$/,
        exclude: /node_modules/,
        use: [ {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      }]    
    }
  }

  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target:'https://testserver.cheyoudaren.com/v2/api-docs', 
  //       changeOrigin: true,
  //       // eslint-disable-next-line no-mixed-spaces-and-tabs
	// 	    ws: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   },
  // }
}