/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { NoSuchElementError } from "./NoSuchElementError";

export class None implements Option<never> {
  static readonly INSTANCE = new None();

  private constructor() {}

  exists(): boolean {
    return false;
  }

  filter(): Option<never> {
    return this;
  }

  get(): never {
    throw new NoSuchElementError();
  }

  isEmpty(): boolean {
    return true;
  }

  isDefined(): boolean {
    return false;
  }

  map<B>(): Option<B> {
    return this;
  }
}
