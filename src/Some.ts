/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { None } from "./None";
import { Option } from "./Option";
import { Matcher } from "./Matcher";

export class Some<A> implements Option<NonNullable<A>> {
  private readonly value: NonNullable<A>;

  constructor(value: NonNullable<A>) {
    this.value = value;
  }

  exists(p: (value: Readonly<NonNullable<A>>) => boolean): boolean {
    return p(this.value);
  }

  filter(
    p: (value: Readonly<NonNullable<A>>) => boolean
  ): Option<NonNullable<A>> {
    return this.exists(p) ? this : None.INSTANCE;
  }

  filterNot(
    p: (value: Readonly<NonNullable<A>>) => boolean
  ): Option<NonNullable<A>> {
    return this.exists(p) ? None.INSTANCE : this;
  }

  flatMap<B>(m: (value: Readonly<NonNullable<A>>) => Option<B>): Option<B> {
    return m(this.value);
  }

  get(): NonNullable<A> {
    return this.value;
  }

  getOrElse(): NonNullable<A> {
    return this.value;
  }

  isEmpty(): boolean {
    return false;
  }

  isDefined(): boolean {
    return true;
  }

  map<B>(m: (value: Readonly<NonNullable<A>>) => NonNullable<B>): Option<B> {
    const mappedValue = m(this.value);
    return new Some(mappedValue);
  }

  match<B>(matcher: Matcher<A, B>): B {
    return matcher.some(this.value);
  }

  orElse(): Option<NonNullable<A>> {
    return this;
  }
}
