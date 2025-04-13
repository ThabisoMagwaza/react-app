const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (options) => {
  return {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      publicPath: 'auto',
      uniqueName: 'mfe4',
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/react', '@babel/env'],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'react',
        library: { type: 'var', name: 'react' },
        filename: 'remoteEntry.js',
        exposes: {
          './web-components': './app.js',
        },
        shared: {
          react: { singleton: true, requiredVersion: '^17.0.1' },
          'react-dom': { singleton: true, requiredVersion: '^17.0.1' },
        },
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
    ],
    devServer: {
      port: 4204,
      hot: true,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  };
};
