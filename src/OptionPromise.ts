/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";

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

  map<B>(fn: (value: A) => B): OptionPromise<NonNullable<B>> {
    const mappedValue = this.value.then(option => option.map(fn));
    return new OptionPromise(mappedValue);
  }

  asPromise(): Promise<Option<A>> {
    return this.value;
  }
}
