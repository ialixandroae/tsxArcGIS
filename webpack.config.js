const path = require('path');

module.exports = {
  entry: ['./src/app.ts'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.bundle.js',
    libraryTarget: 'amd'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'awesome-typescript-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: 'eval-source-map',
  externals: [
    function (context, request, callback) {
      // exclude any esri or dojo modules from the bundle
      // these are included in the ArcGIS API for JavaScript
      // and its Dojo loader will pull them from its own build output
      if (/^dojo/.test(request) ||
        /^dojox/.test(request) ||
        /^dijit/.test(request) ||
        /^esri/.test(request)
      ) {
        return callback(null, 'amd ' + request);
      }
      callback();
    }
  ]
}