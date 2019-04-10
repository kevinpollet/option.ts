/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { NoSuchElementError } from "./NoSuchElementError";
import { Matcher } from "./FnTypes";

// TODO check typescript type system
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class None implements Option<any> {
  static readonly INSTANCE = new None();

  private constructor() {}

  exists(): boolean {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filter(): Option<any> {
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filterNot(): Option<any> {
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getOrElse(defaultValue: any): any {
    return defaultValue;
  }

  // eslint-disable-line @typescript-eslint/no-explicit-any
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
    const cast = this as unknown;
    return cast as Option<B>;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match<B>(matcher: Matcher<any, B>): B {
    return matcher.none();
  }

  orUndefined(): undefined {
    return undefined;
  }
}
