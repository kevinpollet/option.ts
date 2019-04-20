/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { None } from "./None";
import { Option } from "./Option";
import { Matcher } from "./Matcher";

class SomeType<A> implements Option<A> {
  private readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  exists(p: (value: Readonly<A>) => boolean): boolean {
    return p(this.value);
  }

  filter(p: (value: Readonly<A>) => boolean): Option<A> {
    return this.exists(p) ? this : None;
  }

  filterNot(p: (value: Readonly<A>) => boolean): Option<A> {
    return this.exists(p) ? None : this;
  }

  flatMap<B>(m: (value: Readonly<A>) => Option<B>): Option<B> {
    return m(this.value);
  }

  get(): A {
    return this.value;
  }

  getOrElse(): A {
    return this.value;
  }

  isEmpty(): boolean {
    return false;
  }

  isDefined(): boolean {
    return true;
  }

  map<B>(m: (value: Readonly<A>) => NonNullable<B>): Option<B> {
    const mappedValue = m(this.value);
    return new SomeType(mappedValue);
  }

  match<B>(matcher: Matcher<A, B>): B {
    return matcher.Some(this.value);
  }

  orElse(): Option<A> {
    return this;
  }
}

export const Some = <A>(value: NonNullable<A>): SomeType<NonNullable<A>> =>
  new SomeType(value);
