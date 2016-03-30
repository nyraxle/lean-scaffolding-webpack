# Lean Scaffolding Webpack
Lightweight scaffolding template application using webpack.

### CLI
```sh
$ npm install
$ webpack --watch -dev # Start the webpack dev server with watch
$ nodemon # Starts the server and print listening port (open in another terminal)
$ gulp webpack:build # Lint the code and create bundle.js
$ gulp webpack:build-dev #Lint the code and create bundle.js and sourcemaps
```

### Source Structure
```cpp
- src/ // source Files
--- js/
----- entry.js // webpack entry point
- www/ // public Files
--- dist/ // public distribution files (bundles)
--- index.html // html entry point
```

### Stack
[`npm`](https://www.npmjs.com/)
[`express`](http://expressjs.com/)
[`webpack`](https://webpack.github.io/)
[`gulp`](http://gulpjs.com/)


##### Useful Links
- [webpack configurations](https://webpack.github.io/docs/configuration.html)
- [webpack CLI](https://webpack.github.io/docs/cli.html)
