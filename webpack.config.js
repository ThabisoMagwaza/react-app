const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const domain = process.env.PRODUCTION_DOMAIN;

module.exports = (options) => {
  return {
    entry: './index.js',
    output: {
      filename: '[name][contenthash].js',
      publicPath:
        process.env.NODE_ENV === 'production'
          ? `${domain}/marketing/latest/`
          : 'auto',
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
