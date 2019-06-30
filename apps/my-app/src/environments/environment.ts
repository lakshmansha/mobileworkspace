// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: (<any> window)._env.VersionNo + ' ' + (<any> window)._env.ENV,
  serverUrl: (<any> window)._env.serverUrl,
  IsWeb: true,
  VersionNo: (<any> window)._env.VersionNo,
  IsSimulator: true,
  authenticationType: (<any> window)._env.authenticationType,
  App_Name: (<any> window)._env.App_Name
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
