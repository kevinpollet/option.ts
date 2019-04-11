/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { NoSuchElementError } from "./NoSuchElementError";
import { Matcher } from "./Matcher";

// TODO check typescript type system
export class None implements Option<never> {
  static readonly INSTANCE = new None();

  private constructor() {} // eslint-disable-line

  exists(): boolean {
    return false;
  }

  filter(): Option<never> {
    return this;
  }

  filterNot(): Option<never> {
    return this;
  }

  flatMap<B>(): Option<B> {
    return this;
  }

  get(): never {
    throw new NoSuchElementError();
  }

  getOrElse(defaultValue: never): never {
    return defaultValue;
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

  match<B>(matcher: Matcher<never, B>): B {
    return matcher.none();
  }

  orElse(f: () => Option<never>): Option<never> {
    return f();
  }
}
