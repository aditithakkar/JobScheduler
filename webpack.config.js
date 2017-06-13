var config = {
   entry: './main.js', // entry point
   output: {
         filename: 'index.js', // place where bundled app will be served
      },
   devServer: {
         inline: true, // autorefresh
         port: 8080 // development port server
      },
   module: {
         loaders: [
            {
               test: /\.jsx?$/, // search for js files 
               exclude: /node_modules/,
               loader: 'babel-loader',
               query: {
                     presets: ['es2015', 'react'] // use es2015 and react
               }
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            }
      ]
   }
}
module.exports = config;