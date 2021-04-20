const path = require('path');

module.exports = {
  entry: './private/client.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, './compiled'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
};
