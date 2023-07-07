const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode:'development',
    entry: './src/main.js',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
    },
    optimization:{
        minimize:true,
    },
    module: {
        rules: [
          {
            test: /\.vue$/,
            use: 'vue-loader',
          },
        ],
      },
    
      plugins: [
        new VueLoaderPlugin(),
      ],
    
      resolve: {
        extensions: ['.js', '.vue'],
      },
}