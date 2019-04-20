/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Function } from "./Function";
import { Option } from "./Option";

class SomeType<A> implements Option<A> {
  private readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  get(): A {
    return this.value;
  }

  getOrElse(): A {
    return this.value;
  }

  chain<B>(op: Function<A, Option<B>>): Option<B> {
    return op(this.value);
  }
}

export const Some = <A>(value: A): SomeType<A> => new SomeType(value);
