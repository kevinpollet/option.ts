/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { isOption } from "./utils/isOption";
import { Option } from "./Option";
import { None } from "./None";

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

  pipe<B>(op: (value: A) => B | Option<B>): Option<B> {
    const result = op(this.value);
    if (isOption(result)) {
      return result;
    }
    return result ? new SomeType(result) : None;
  }
}

export const Some = <A>(value: A): SomeType<A> => new SomeType(value);
