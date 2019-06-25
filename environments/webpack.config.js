var XMLWebpackPlugin = require('xml-webpack-plugin');
var path = require('path');

var xmlFiles = (value) => {
  return [
    {
      template: path.join(__dirname, 'env.config.ejs'),
      filename: 'env_bundle.js',
      data: {
        ServerUrl: value.ServerUrl,
        VersionNo: value.VersionNo,
        App_Name: value.App_Name,
        AuthType: value.AuthType,
        ENV: value.ENV
      }
    }
  ];
};

module.exports = (env) => {
  // Use env.<YOUR VARIABLE> here:
  console.log('Environment : ', env.MODE);
  console.log('Environment CHANNEL : ', env.CHANNEL);
  console.log('App NAME : ', env.APP);

  var environment = require('./'+ env.APP +'/env');

  var config = environment.dev;
  if (env.MODE !== "dev") {
    config = environment[env.MODE];
  }
  let envr = 'production';
  let _path = '../apps/'+ env.APP +'/src/assets';
  if (env.CHANNEL === "prod") {
    _path = '../dist/apps/'+ env.APP +'/assets'
  }

  return {
    mode: envr,
    entry: path.join(__dirname, 'webpack.ts'),
    output: {
      path: path.resolve(__dirname, _path),
      filename: 'webpack_bundle.js'
    },
    plugins: [
      new XMLWebpackPlugin({
        files: xmlFiles(config)
      })
    ]
  }
};
