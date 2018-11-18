# require-maybe

[![build status](https://img.shields.io/travis/AndreasPizsa/require-maybe.svg?style=flat-square)](https://travis-ci.org/AndreasPizsa/require-maybe)
[![code coverage](https://img.shields.io/codecov/c/github/AndreasPizsa/require-maybe.svg?style=flat-square)](https://codecov.io/gh/AndreasPizsa/require-maybe)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg?style=flat-square)](https://lass.js.org)
[![license](https://img.shields.io/github/license/andreaspizsa/require-maybe.svg?style=flat-square)](LICENSE) [![Greenkeeper badge](https://badges.greenkeeper.io/AndreasPizsa/require-maybe.svg)](https://greenkeeper.io/)

> Optionally require a module, optionally falling back to others.

* returns `undefined` if the optional module(s) can't be found
* without throwing an exception
* can attempt to load alternative modules
* works with all paths (unlike similar modules)

This can be useful for libraries that want to use certain features when the optional modules are installed, without pulling in additional dependencies.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install require-maybe
```

[yarn][]:

```sh
yarn add require-maybe
```


## Usage

```js
const requireMaybe = require('require-maybe');

function noop(x) {
  return x
}

// use `rainbow` if it’s installed, or normal text if it isn't
const rainbow = requireMaybe('chalk-rainbow') || noop
console.log(rainbow('hello world!'))
// -> rainbowified or plain "hello world!"


// Use either implementation of `camelcase`, or none
const camelcase = requireMaybe(['lodash.camelcase', 'camelcase']) || noop
console.log(camelcase('hello world!'))
// -> "helloWorld!" or "hello world!"
```


## Contributors

| Name              | Website                           |
| ----------------- | --------------------------------- |
| **Andreas Pizsa** | <https://github.com/AndreasPizsa> |


## License

[MIT](LICENSE) © [Andreas Pizsa](https://github.com/AndreasPizsa)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
