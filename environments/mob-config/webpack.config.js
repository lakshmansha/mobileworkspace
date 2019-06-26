var XMLWebpackPlugin = require('xml-webpack-plugin');
var path = require('path');

var xmlMOBFiles = (value) => {
  return [
    {
      template: path.join(__dirname, values.MOBPATH),
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
  console.log('Is Mobile Build : ', env.MOBILE);

  var plugins = [];
  var environment = require('./' + env.APP + '/env');

  const envr = 'production';
  var config = environment.dev;
  if (env.MODE !== "dev") {
    config = environment[env.MODE];
  }

  // let _path = '../apps/' + env.APP + '/src/assets';
  // if (env.CHANNEL === "prod") {
  //   _path = '../dist/apps/' + env.APP + '/assets'
  // }

  const _path = "";

  environment[env.MODE].MOBPATH = "apps/" + env.APP + '/cordova.config.ejs';

  plugins.push(new XMLWebpackPlugin({ files: xmlFiles(config) }));

  if (env.MOBILE === "y") {
    plugins.push(new XMLWebpackPlugin({ files: xmlMOBFiles(config) }));
  }

  return {
    mode: envr,
    entry: path.join(__dirname, 'webpack.ts'),
    output: {
      path: path.resolve(__dirname, _path),
      filename: 'webpack_bundle.js'
    },
    plugins: plugins
  }
};
