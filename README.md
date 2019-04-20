# optional.ts &middot; [![Build Status](https://travis-ci.com/kevinpollet/monatic.svg?token=tSMJcyr4W5f93JMvoe6S&branch=master)](https://travis-ci.com/kevinpollet/monatic) ![TypeScript Version](https://img.shields.io/badge/TypeScript-3.x-blue.svg)

Option monad for TypeScript ✨🎉

This library has been designed with type safety and usability in mind. You're encouraged to enable `strictNullChecks` in your TypeScript compiler options to raise `null` or `undefined` misuses at compile time. From TypeScript [documentation][1]:

> In strict null checking mode, the null and undefined values are not in the domain of every type and are only assignable to themselves and any (the one exception being that undefined is also assignable to void).

## Install

npm

```
$ npm install optional.ts --save
```

yarn

```
$ yarn add optional.ts
```

## License

[MIT licensed](./LICENSE.md).

[1]: https://www.typescriptlang.org/docs/handbook/compiler-options.html
