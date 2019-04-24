/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { UnaryFunction } from "./UnaryFunction";

class SomeType<A> extends Option<A> {
  private readonly value: A;

  constructor(value: A) {
    if (!value) {
      throw new TypeError("value cannot be undefined or null");
    }

    super();
    this.value = value;
  }

  get(): A {
    return this.value;
  }

  getOrElse(): A {
    return this.value;
  }

  match<B>({ Some }: { Some: UnaryFunction<A, B> }): B {
    return Some(this.value);
  }
}

export const Some = <A>(value: NonNullable<A>): SomeType<NonNullable<A>> =>
  new SomeType(value);
