/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { None } from "./None";

/**
 * Represents a non-empty option.
 */
export class SomeType<A> implements Option<A> {
  private readonly value: A;

  constructor(value: A) {
    if (!value) {
      throw new TypeError("value cannot be undefined or null");
    }
    this.value = value;
  }

  exists(fn: (value: Readonly<A>) => boolean): boolean {
    return fn(this.value);
  }

  filter(fn: (value: Readonly<A>) => boolean): Option<A> {
    return fn(this.value) ? this : None;
  }

  filterNot(fn: (value: Readonly<A>) => boolean): Option<A> {
    return !fn(this.value) ? this : None;
  }

  flatMap<B>(fn: (value: Readonly<A>) => Option<B>): Option<B> {
    return fn(this.value);
  }

  fold<B>(_: B, fn: (value: A) => B): B {
    return fn(this.value);
  }

  forEach(fn: (value: A) => void): void {
    return fn(this.value);
  }

  get(): A {
    return this.value;
  }

  getOrElse(): A {
    return this.value;
  }

  isDefined(): boolean {
    return true;
  }

  isEmpty(): boolean {
    return false;
  }

  map<B>(fn: (value: Readonly<A>) => B): Option<NonNullable<B>> {
    const mappedValue = fn(this.value);
    return mappedValue ? new SomeType(mappedValue as NonNullable<B>) : None;
  }

  match<B>({ Some }: { Some: (value: A) => B }): B {
    return Some(this.value);
  }

  orElse(): Option<A> {
    return this;
  }
}
