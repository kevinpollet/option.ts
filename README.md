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
import { filter, from, map, Option } from "@kevinpollet/option.ts";

const user: number | undefined = User.findById();
const address = from(user)
  .chain(filter(user => user.age > 21), map(user => user.address))
  .match({
    None: () => "none",
    Some: address => address,
  });
```

### Operators

An operator is a function implementing the following signature: `<A,B>(option: Option<A>) => Option<B>`. The operator abstraction allow functional composition and ease the creation of new operators. Look at the following sections for more details!

#### Composition

Operators can be composed like :

```ts
import { filter, from, map, Option } from "@kevinpollet/option.ts";

const pickFirstChar = (option: Option<string>) =>
  map<string, string>(s => s.charAt(0))(
    filter<string>(s => s.length > 0)(option)
  );

const char = from("hello")
  .chain(pickFirstChar)
  .getOrElse(""); // return "h"
```

#### Create an operator

It's also really easy to build a custom operator. As an example we will implement the `pickFirstChar` operator returning the first character of a string or None if it doesn't exist:

```ts
export const pickFirstChar = (index: number) => (
  option: Option<string>
): Option<string> =>
  option.match({
    None: () => None,
    Some: value => (index > 0 ? Some(value.charAt(index)) : None),
  });
```

## License

[MIT licensed](./LICENSE.md).

[1]: https://www.typescriptlang.org/docs/handbook/compiler-options.html
