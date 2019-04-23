# optional.ts &middot; [![Build Status](https://travis-ci.com/kevinpollet/monatic.svg?token=tSMJcyr4W5f93JMvoe6S&branch=master)](https://travis-ci.com/kevinpollet/monatic) ![TypeScript Version](https://img.shields.io/badge/TypeScript-3.x-blue.svg)

Option monad for TypeScript ✨🎉

## Install

npm

```shell
$ npm install optional.ts --save
```

yarn

```shell
$ yarn add optional.ts
```

## Type safety

You're strongly encouraged to enable the `strictNullChecks` flag in your TypeScript compiler options to raise errors at compile time. From the doc:

> In strict null checking mode, the null and undefined values are not in the domain of every type and are only assignable to themselves and any (the one exception being that undefined is also assignable to void).

```ts
// With strictNullChecks the following lines will raise an error at compile time instead
Some(null);
Some(undefined);
```

## Usage

```ts
import { from, Option } from "optional.ts";
import { filter, map } from "optional.ts/lib/operators";

const user: number | undefined = User.findById();
const address = from(user)
  .chain(filter(user => user.age > 21))
  .chain(map(user => user.address))
  .match({
    None: () => "none",
    Some: address => address,
  });
```

## License

[MIT licensed](./LICENSE.md).

[1]: https://www.typescriptlang.org/docs/handbook/compiler-options.html
