/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { NoSuchElementError } from "./NoSuchElementError";

class NoneType<A> implements Option<A> {
  constructor() {}

  get(): never {
    throw new NoSuchElementError();
  }

  getOrElse<B>(defaultValue: B): B {
    return defaultValue;
  }

  chain<B>(): Option<B> {
    return this;
  }
}

export const None = new NoneType<never>();
