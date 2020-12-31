# PmsplusUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.3.

## Get Started

### Install Packages

npm install

### Run Server

ng serve --open

### New Component

ng g component layout/graphic-management/

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Custom Environments

Use your own environment.ts file, please check angular.js, add your own configuration and environment.[your configuration].ts, then try something like

ng serve --configuration=ray --open

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
(option Use the `--output-hashing=all` flag for build file with different name each time)

### Running unit tests
d
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## i18n

we use AOT to genreate multi-language supoort. please go to Angular.io to get more information.

### Generate i18n

ng xi18n --output-path src/i18n

### Prepare i18n file for translate according to locale

ng xi18n --output-path src/i18n --locale zh

## Production

without Language

```bash

ng build --prod
```

with Language

```bash

ng build --prod --aot --i18nFile=src/i18n/messages.zh.xlf --i18nFormat=xlf --locale=zh --output-path=dist/zh
```

## ng-cli bug workaround

while build from

```bash

ng new project-name

```

and then try to run

```bash

npm install

```

will cause error [npm WARN codelyzer@3.2.2 requires a peer of @angular/compiler@^2.3.1 || >=4.0.0-beta <5.0.0 but none was installed.]
the workaround is very trivial, just update codelyzer to ~4.0.1 in package.json and fix tslint.json file

manual change "codelyzer": "~3.2.0",  to "codelyzer": "~4.0.1",
and do modify as follow in tslint.json

```bash
-  "directive-class-suffix": true,
-  "invoke-injectable": true
```

then add

```bash

+    "directive-class-suffix": true
```

then try installing npm again

```bash

npm install

```


## Jenkins Server
http://ec2-35-164-145-170.us-west-2.compute.amazonaws.com:8080