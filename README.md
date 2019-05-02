# option.ts &middot; [![Build Status](https://travis-ci.com/kevinpollet/option.ts.svg?branch=master)](https://travis-ci.com/kevinpollet/option.ts) ![TypeScript Version](https://img.shields.io/badge/TypeScript-3.x-blue.svg)

Option monad for TypeScript ✨

## Type safety

You're strongly encouraged to add the `strictNullChecks` flag to your TypeScript compiler options. Adding this flag will raise compile time errors in the following cases:

```ts
Some(null); // Error
Some(undefined); // Error
```

From TypeScript documentation:

> In strict null checking mode, the null and undefined values are not in the domain of every type and are only assignable to themselves and any (the one exception being that undefined is also assignable to void).

## Install

```shell
$ npm install --save @kevinpollet/option.ts
```

## License

[MIT](./LICENSE.md).
