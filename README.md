`ng eject --extract-css --output-hashing=bundles --watch --verbose --prod`

`ng eject --extract-css --output-hashing=bundles --watch --verbose --force`

```

 "scripts": {
    "ng": "ng",
    "start": "webpack-dev-server",
    "build": "webpack",
    "build:prod": "webpack --config webpack.config.prod.js",
    "test": "karma start ./karma.conf.js",
    "lint": "ng lint",
    "e2e": "protractor ./protractor.conf.js",
    "pree2e": "webdriver-manager update --standalone false --gecko false --quiet"
  }
  ```