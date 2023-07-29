// const packageJson = require('../../../package.json');
const packageJson = {
  "name": "roi",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^15.2.0",
    "@angular/cdk": "^15.2.7",
    "@angular/common": "^15.2.0",
    "@angular/compiler": "^15.2.0",
    "@angular/core": "^15.2.0",
    "@angular/forms": "^15.2.0",
    "@angular/language-service": "^15.2.7",
    "@angular/material": "^15.2.7",
    "@angular/platform-browser": "^15.2.0",
    "@angular/platform-browser-dynamic": "^15.2.0",
    "@angular/router": "^15.2.0",
    "@fortawesome/angular-fontawesome": "^0.12.1",
    "@fortawesome/fontawesome-svg-core": "^6.2.1",
    "@fortawesome/free-solid-svg-icons": "^6.2.1",
    "@ngrx/effects": "^15.4.0",
    "@ngrx/entity": "^15.4.0",
    "@ngrx/router-store": "^15.4.0",
    "@ngrx/store": "^15.4.0",
    "@ngrx/store-devtools": "^15.4.0",
    "@ngx-translate/core": "^14.0.0",
    "@ngx-translate/http-loader": "^7.0.0",
    "bootstrap": "^5.2.3",
    "browser-detect": "^0.2.28",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.12.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^15.2.5",
    "@angular/cli": "~15.2.5",
    "@angular/compiler-cli": "^15.2.0",
    "@types/jasmine": "~4.3.0",
    "@types/node": "^18.15.11",
    "jasmine-core": "~4.5.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.0.0",
    "typescript": "~4.9.4"
  }
};

export const environment = {
  appName: 'roinsight',
  api_url: 'http://127.0.0.1:8000/',
  envName: 'PROD',
  production: true,
  test: false,
  i18nPrefix: '/roinsight',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    material: packageJson.dependencies['@angular/material'],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    ngxtranslate: packageJson.dependencies['@ngx-translate/core'],
    fontAwesome: '2022',
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript'],
    cypress: '2022',
    eslint: '2022'
  }
};
