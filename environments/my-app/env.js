var pkg = require('../../package.json');

var version = pkg['myapp-version'];

var DESCRIPTION = "My App For Testing 12 Factor App with Mobile Implemetation."

var Author = {
  AUTH_EMAIL: "author@company.com",
  AUTH_HREF: "http://myapp-qa.com",
  AUTH_DESC: " Author "
};

module.exports = {
  dev: {
    App_ID: "com.company.MyAppDev",
    App_Name: 'My App (DEV)',
    VersionNo: version,
    ServerUrl: 'http://localhost:55112/api',
    AuthType: 'XML',
    ENV: "(DEV)",
    RES: 'res',
    DESCRIPTION: DESCRIPTION,
    AUTH_EMAIL: Author.AUTH_EMAIL,
    AUTH_HREF: Author.AUTH_HREF,
    AUTH_DESC: Author.AUTH_DESC
  },
  qa: {
    App_ID: "com.company.MyAppQA",
    App_Name: 'My App (QA)',
    VersionNo: version,
    ServerUrl: 'http://myapp-qa.com/api',
    AuthType: 'LDAP',
    ENV: "(QA)",
    RES: 'res',
    DESCRIPTION: DESCRIPTION,
    AUTH_EMAIL: Author.AUTH_EMAIL,
    AUTH_HREF: Author.AUTH_HREF,
    AUTH_DESC: Author.AUTH_DESC
  },
  uat: {
    App_ID: "com.company.MyAppUAT",
    App_Name: 'My App (UAT)',
    VersionNo: version,
    ServerUrl: 'http://myapp-uat.com/api',
    AuthType: 'LDAP',
    ENV: "(UAT)",
    RES: 'res',
    DESCRIPTION: DESCRIPTION,
    AUTH_EMAIL: Author.AUTH_EMAIL,
    AUTH_HREF: Author.AUTH_HREF,
    AUTH_DESC: Author.AUTH_DESC
  },
  prod: {
    App_ID: "com.company.MyApp",
    App_Name: 'My App',
    VersionNo: version,
    ServerUrl: 'http://myapp-prod.com/api',
    AuthType: 'LDAP',
    ENV: "",
    RES: 'res',
    DESCRIPTION: DESCRIPTION,
    AUTH_EMAIL: Author.AUTH_EMAIL,
    AUTH_HREF: Author.AUTH_HREF,
    AUTH_DESC: Author.AUTH_DESC
  }
};
