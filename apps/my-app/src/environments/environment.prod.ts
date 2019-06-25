export const environment = {
  production: true,
  version: (<any> window)._env.VersionNo + ' ' + (<any> window)._env.ENV,
  serverUrl: (<any> window)._env.serverUrl,
  IsWeb: false,
  VersionNo: (<any> window)._env.VersionNo,
  IsSimulator: false,
  authenticationType: (<any> window)._env.authenticationType,
  App_Name: (<any> window)._env.App_Name
};
