# Monatic &middot; [![Build Status](https://travis-ci.com/kevinpollet/monatic.svg?token=tSMJcyr4W5f93JMvoe6S&branch=master)](https://travis-ci.com/kevinpollet/monatic) ![TypeScript Version](https://img.shields.io/badge/TypeScript-3.x-blue.svg)

✨Type-safe and pragmatic Monads for TypeScript ✨

This library has been designed with type safety and usability in mind. You're encouraged to enable `strictNullChecks` in your TypeScript compiler options to raise `null` or `undefined` misuses at compile time. From TypeScript [documentation][4]:

> In strict null checking mode, the null and undefined values are not in the domain of every type and are only assignable to themselves and any (the one exception being that undefined is also assignable to void).

## Install

Install with npm:

```
$ npm install monatic --save
```

Install with yarn:

```
$ yarn add monatic
```

## Option

```ts
import { from, Some, None, Option } from "monatic";

const random = (): number | undefined => {
  const value = Math.floor(Math.random() * 100); // generates a random number between [0,100[
  return value % 2 === 0 ? value : undefined;
};

// Will be 10 if random value is undefined, value * 2 otherwise
const x = from(random())
  .map(v => v * 2)
  .getOrElse(10);
```

## Contributing

### Scripts

- `clean`: Remove generated files
- `lint:src`: Lint src files with [ESLint][3]
- `lint:test`: Lint test files with [ESLint][3]
- `build:src`: Compile src
- `build:test`: Compile test
- `format`: Format files with [Prettier][1]
- `test`: Run tests with [Jest][2]

## License

[MIT licensed](./LICENSE.md).

[1]: https://prettier.io
[2]: https://jestjs.io
[3]: https://eslint.org
[4]: https://www.typescriptlang.org/docs/handbook/compiler-options.html¨
