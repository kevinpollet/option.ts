/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { NoSuchElementError } from "./NoSuchElementError";
import { Matcher } from "./Matcher";

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
    return (this as unknown) as Option<B>;
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
    return (this as unknown) as Option<B>;
  }

  match<B>(matcher: Matcher<never, B>): B {
    return matcher.none();
  }

  orElse(f: () => Option<A>): Option<A> {
    return f();
  }
}

export const None = new NoneType<never>();
