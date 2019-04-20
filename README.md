# optional.ts &middot; [![Build Status](https://travis-ci.com/kevinpollet/monatic.svg?token=tSMJcyr4W5f93JMvoe6S&branch=master)](https://travis-ci.com/kevinpollet/monatic) ![TypeScript Version](https://img.shields.io/badge/TypeScript-3.x-blue.svg)

✨Option monad for TypeScript ✨

This library has been designed with type safety and usability in mind. You're encouraged to enable `strictNullChecks` in your TypeScript compiler options to raise `null` or `undefined` misuses at compile time. From TypeScript [documentation][1]:

> In strict null checking mode, the null and undefined values are not in the domain of every type and are only assignable to themselves and any (the one exception being that undefined is also assignable to void).

## Install

npm

```
$ npm install monatic --save
```

yarn

```
$ yarn add monatic
```

## Usage

```ts
import { from, Some, None, Option } from "optional.ts";

const random = (): number | undefined => {
  const value = Math.floor(Math.random() * 100); // generates a random number between [0,100[
  return value % 2 === 0 ? value : undefined;
};

// Will be 10 if random value is undefined, value * 2 otherwise
const x = from(random())
  .map(v => v * 2)
  .getOrElse(10);
```

## License

[MIT licensed](./LICENSE.md).

[1]: https://www.typescriptlang.org/docs/handbook/compiler-options.html
