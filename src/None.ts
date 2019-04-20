/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { NoSuchElementError } from "./NoSuchElementError";

class NoneType implements Option<never> {
  constructor() {}

  get(): never {
    throw new NoSuchElementError();
  }

  getOrElse<B>(defaultValue: B): B {
    return defaultValue;
  }

  pipe<B>(): Option<B> {
    return new NoneType();
  }
}

export const None = new NoneType();
