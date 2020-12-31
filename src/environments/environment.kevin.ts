// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: true,
    version: '0.0.1',
    // pmsplus_api: 'http://192.168.0.10:8000/api/v1/'
    pmsplus_api: 'http://192.168.190.1:8000/api/v1/'
    // pmsplus_api: 'http://54.214.198.230:83/api/v1/'
    // pmsplus_api: 'http://ec2-35-163-187-179.us-west-2.compute.amazonaws.com:82/api/v1/'
    // pmsplus_api: 'http://60.248.1.146:8000/api/v1/'
};
