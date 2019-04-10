/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { None } from "./None";
import { Option } from "./Option";
import { MapFn, PredicateFn } from "./Fns";
import { Matcher } from "./Matcher";

export class Some<A> implements Option<A> {
  private readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  exists(p: PredicateFn<A>): boolean {
    return p(this.value);
  }

  filter(p: PredicateFn<A>): Option<A> {
    return this.exists(p) ? this : None.INSTANCE;
  }

  filterNot(p: PredicateFn<A>): Option<A> {
    return this.exists(p) ? None.INSTANCE : this;
  }

  flatMap<B>(m: MapFn<A, Option<B>>): Option<B> {
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

  map<B>(m: MapFn<A, NonNullable<B>>): Option<B> {
    const mappedValue = m(this.value);
    return new Some(mappedValue);
  }

  match<B>(matcher: Matcher<A, B>): B {
    return matcher.some(this.value);
  }

  orElse(): Option<A> {
    return this;
  }

  orUndefined(): A {
    return this.value;
  }
}
