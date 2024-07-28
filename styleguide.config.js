const webpack = require('webpack');

const webpackConfig = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/react",
              ]
            },
          },
          {
            loader: 'ts-loader',
            options: {
              // Important! Avoids "Error: TypeScript emitted no output for..." errors
              compilerOptions: {
                noEmit: false,
              },
            },
          },
        ],
      },
      {
        test: /.\.md$/, // see comment below!
        type: 'javascript/auto', // Tell webpack to interpret the result from examples-loader as JavaScript
      },
    ],
  },
  plugins: [
    // Rewrites the absolute paths to those two files into relative paths
    new webpack.NormalModuleReplacementPlugin(
      /react-styleguidist\/lib\/loaders\/utils\/client\/requireInRuntime$/,
      'react-styleguidist/lib/loaders/utils/client/requireInRuntime'
    ),
    new webpack.NormalModuleReplacementPlugin(
      /react-styleguidist\/lib\/loaders\/utils\/client\/evalInContext$/,
      'react-styleguidist/lib/loaders/utils/client/evalInContext'
    ),
  ],
};

module.exports = {
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    {
      "compilerOptions": { "noEmit": false },
    }
  ).parse,
  webpackConfig,
  // The rest of your styleguidist config
};