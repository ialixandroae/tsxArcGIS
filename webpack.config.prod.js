const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  disable: false
});

const path = require('path');

module.exports = {
  entry: ["./src/components/index.tsx"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.bundle.js",
    libraryTarget: "amd"
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "awesome-typescript-loader"
        }
      }
    ]
  },
  plugins: [extractSass, new UglifyJsPlugin()],
  devServer: {
    contentBase: __dirname
  },
  externals: [
    function(context, request, callback) {
      // exclude any esri or dojo modules from the bundle
      // these are included in the ArcGIS API for JavaScript
      // and its Dojo loader will pull them from its own build output
      if (
        /^dojo/.test(request) ||
        /^dojox/.test(request) ||
        /^dijit/.test(request) ||
        /^esri/.test(request)
      ) {
        return callback(null, "amd " + request);
      }
      callback();
    }
  ]
};