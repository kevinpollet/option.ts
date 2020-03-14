# option.ts

[![Build Status](https://github.com/kevinpollet/option.ts/workflows/build/badge.svg)](https://github.com/kevinpollet/option.ts/actions)
![TypeScript Version](https://img.shields.io/badge/TypeScript-3.x-blue.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

Option monad for TypeScript

## Install

```shell
$ npm install --save @kevinpollet/option.ts
```

## Usage

```ts
import { from } from "@kevinpollet/option.ts";

const user: User | undefined = findById(42);

const name: string = from(user)
  .map(value => value.getName())
  .getOrElse("No Name");
```

💡 As you've already noticed `Option` monad does not play well with `Promise` from `ES6`. If you look at the following coding you will see that you need to write a lot of boilerplate code.

```ts
import { from } from "@kevinpollet/option.ts";

const user: Promise<Option<User>> = findById(42);

const name: Promise<Option<string>> = from(user).then(promiseValue =>
  promiseValue.map(value => value.getName())
);
```

To reduce this boilerplate code `option.ts` supports asynchronous option:

```ts
import { fromPromise } from "@kevinpollet/option.ts";

const user: Promise<Option<User>> = findById(42);

const name: OptionPromise<string> = fromPromise(user).map(value =>
  value.getName()
);
```

## Type safety

You're strongly encouraged to add the `strictNullChecks` flag to your TypeScript compiler options. From TypeScript documentation:

> In strict null checking mode, the null and undefined values are not in the domain of every type and are only assignable to themselves and any (the one exception being that undefined is also assignable to void).

With this flag the following code will not compile. Without `strictNullChecks` a `TypeError` will be thrown at runtime:

```ts
Some(null); // Compilation error
Some(undefined); // Compilation error
```

## Contributing

Contributions are welcome!

Want to file a bug, request a feature or contribute some code?

1. Check out the [Code of Conduct](./CODE_OF_CONDUCT.md).
2. Check for an existing issue corresponding to your bug or feature request.
3. Open an issue to describe your bug or feature request.

## License

[MIT](./LICENSE.md)
