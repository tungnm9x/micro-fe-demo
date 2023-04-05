// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

interface Auth0Config {
  domain: string;
  clientId: string;
  authorizationParams: {
    redirect_uri?: string;
  };
  appUri: string;
  errorPath: string;
}

const auth0Config: Auth0Config = {
  domain: 'gauvendi-dev.eu.auth0.com',
  clientId: 'YW9z15wg0DcDnWMMtZCm1Gdht1kX8EfB',
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
  appUri: 'http://localhost:4200',
  errorPath: '/error',
};

export const environment = {
  production: false,
  auth: auth0Config,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
