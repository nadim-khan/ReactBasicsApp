
const path = require('path');

var config = {
   entry: './main.js',
   output: {
      path:path.resolve(__dirname, 'dist'),
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: process.env.PORT||3000
   },
    
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
                
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.html$/i,
            use: ['html-loader']
         },
         {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader','sass-loader']
        }
      ]
   }
}
module.exports = config;
