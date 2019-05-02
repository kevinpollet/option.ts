/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { NoSuchElementError } from "./NoSuchElementError";

class NoneType<A> implements Option<A> {
  exists(): boolean {
    return false;
  }

  filter(): Option<A> {
    return this;
  }

  filterNot(): Option<A> {
    return this;
  }

  flatMap<B>(): Option<B> {
    const unknownThis = this as unknown;
    return unknownThis as Option<B>;
  }

  forEach(): void {
    return;
  }

  get(): A {
    throw new NoSuchElementError();
  }

  getOrElse(value: A): A {
    return value;
  }

  isDefined(): boolean {
    return false;
  }

  isEmpty(): boolean {
    return true;
  }

  map<B>(): Option<B> {
    const unknownThis = this as unknown;
    return unknownThis as Option<B>;
  }

  orElse(value: Option<A>): Option<A> {
    return value;
  }
}

export const None = new NoneType<never>();
