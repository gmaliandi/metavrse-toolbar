const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  webpack: (config, { buildId, dev }) => {
    const copyVSPlugin = new CopyWebpackPlugin([
      {
        from: 'node_modules/monaco-editor/min/vs',
        to: '../vs'
      }
    ], {copyUnmodified: true});

    config.plugins.push(
      copyVSPlugin,
      new WriteFilePlugin()
    );

    return config;
  }
};
