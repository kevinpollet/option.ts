# option.ts &middot; [![Build Status](https://travis-ci.com/kevinpollet/option.ts.svg?branch=master)](https://travis-ci.com/kevinpollet/option.ts) ![TypeScript Version](https://img.shields.io/badge/TypeScript-3.x-blue.svg)

Option monad for TypeScript ✨🎉

## Install

npm

```shell
$ npm install @kevinpollet/option.ts --save
```

yarn

```shell
$ yarn add @kevinpollet/option.ts
```

## Type safety

You're strongly encouraged to enable the `strictNullChecks` flag in your TypeScript compiler options to raise errors at compile time. From the doc:

> In strict null checking mode, the null and undefined values are not in the domain of every type and are only assignable to themselves and any (the one exception being that undefined is also assignable to void).

```ts
// With strictNullChecks the following lines will raise an error at compile time
Some(null);
Some(undefined);
```

## Usage

```ts
import { from, Option } from "@kevinpollet/option.ts";
import { filter, map } from "@kevinpollet/option.ts/lib/operators";

const user: number | undefined = User.findById();
const address = from(user)
  .chain(filter(user => user.age > 21), map(user => user.address))
  .match({
    None: () => "none",
    Some: address => address,
  });
```

## Create your chain operator

With the functional operator abstraction it's really easy to build a custom operator. As an example we will implement an operator returning the character at the given index or None if it doesn't exist:

```ts
export const pick = (index: number): ChainFunction<string, string> => (
  option: Option<string>
): Option<string> =>
  option.match({
    None: () => None,
    Some: value =>
      index >= 0 && index < value.length ? Some(value.charAt(index)) : None,
  });
```

Example of use:

```ts
from("hello")
  .chain(pick(0)) // Some("h")
  .get(); // "h"
```

## License

[MIT licensed](./LICENSE.md).

[1]: https://www.typescriptlang.org/docs/handbook/compiler-options.html
