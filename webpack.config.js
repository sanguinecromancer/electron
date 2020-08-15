const path = require('path');

// module.exports = {
//   test: /\.(js|jsx)$/,
//   exclude: /node_modules/,
//   use: {
//     loader: "babel-loader"
//   },
//   entry: './src/index.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// };



module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ],         
    },
    entry: './src/view.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: "development",
    performance: {
      hints: false
    },
  };