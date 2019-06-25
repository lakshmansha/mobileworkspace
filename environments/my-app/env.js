var pkg = require('../../package.json');

var version = pkg['myapp-version'];

module.exports = {
  dev: {
    App_Name: 'My App (DEV)',
    VersionNo: version,
    ServerUrl: 'http://localhost:55112/api',
    AuthType: 'XML',
    ENV: "(DEV)"
  },
  qa: {
    App_Name: 'My App (QA)',
    VersionNo: version,
    ServerUrl: 'http://myapp-qa.com/api',
    AuthType: 'LDAP',
    ENV: "(QA)"
  },
  uat: {
    App_Name: 'My App (UAT)',
    VersionNo: version,
    ServerUrl: 'http://myapp-uat.com/api',
    AuthType: 'LDAP',
    ENV: "(UAT)"
  },
  prod: {
    App_Name: 'My App',
    VersionNo: version,
    ServerUrl: 'http://myapp-prod.com/api',
    AuthType: 'LDAP',
    ENV: ""
  }
};
