/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";

/**
 * Represents an asynchronous option.
 */
export class OptionPromise<A> {
  private readonly value: Promise<Option<A>>;

  constructor(value: Promise<Option<A>>) {
    this.value = value;
  }

  filter(fn: (value: Readonly<A>) => boolean): OptionPromise<A> {
    const filteredValue = this.value.then(option => option.filter(fn));
    return new OptionPromise(filteredValue);
  }

  filterNot(fn: (value: Readonly<A>) => boolean): OptionPromise<A> {
    const filteredValue = this.value.then(option => option.filterNot(fn));
    return new OptionPromise(filteredValue);
  }

  get(): Promise<A> {
    return this.value.then(option => option.get());
  }

  getOrElse(value: A): Promise<A> {
    return this.value.then(option => option.getOrElse(value));
  }

  map<B>(fn: (value: A) => B): OptionPromise<NonNullable<B>> {
    const mappedValue = this.value.then(option => option.map(fn));
    return new OptionPromise(mappedValue);
  }

  toPromise(): Promise<Option<A>> {
    return this.value;
  }
}