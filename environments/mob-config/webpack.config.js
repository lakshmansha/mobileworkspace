var XMLWebpackPlugin = require('xml-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var xmlMOBFiles = (value) => {
  return [
    {
      template: path.join(__dirname, value.MOBPATH + '/cordova.config.ejs'),
      filename: 'config.xml',
      data: {
        App_ID: value.App_ID,
        VersionNo: value.VersionNo,
        App_Name: value.App_Name,
        res: value.RES,
        AUTH_EMAIL: value.AUTH_EMAIL,
        AUTH_HREF: value.AUTH_HREF,
        AUTH_DESC: value.AUTH_DESC
      }
    }
  ];
};

module.exports = (env) => {
  // Use env.<YOUR VARIABLE> here:
  console.log('Environment : ', env.MODE);
  console.log('Environment CHANNEL : ', env.CHANNEL);
  console.log('App NAME : ', env.APP);
  console.log('Is Mobile Build : ', env.MOB);

  var plugins = [];
  var environment = require('../apps/' + env.APP + '/env');

  var config = environment.dev;
  if (env.MODE !== "dev") {
    config = environment[env.MODE];
  }

  const envr = 'production';
  const _path = "../../";
  const _dist = './dist/apps/' + env.APP;

  var RESPATH = "././environments/apps/" + env.APP;
  config.MOBPATH = "../../environments/apps/" + env.APP;

  plugins.push(new XMLWebpackPlugin({ files: xmlMOBFiles(config) }));

  if (env.MOB === "y") {
    plugins.push(new CopyWebpackPlugin([
      { from: RESPATH + '/resources', to: 'model'}
    ]));
    plugins.push(new CopyWebpackPlugin([
      { from: _dist, to: 'www'}
    ]));
  }

  return {
    mode: envr,
    entry: path.join(__dirname, '../webpack.ts'),
    output: {
      path: path.resolve(__dirname, _path),
      filename: 'webpack_bundle.js'
    },
    plugins: plugins
  }
};
