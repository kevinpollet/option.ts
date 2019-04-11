/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";

export class OptionAsync<A> {
  private readonly promise: Promise<Option<A>>;

  constructor(promise: Promise<Option<A>>) {
    this.promise = promise;
  }

  map<B>(m: (value: Readonly<A>) => NonNullable<B>): OptionAsync<B> {
    const mappedOptionAsync = this.promise.then(option => option.map(m));
    return new OptionAsync(mappedOptionAsync);
  }

  get(): Promise<Option<A>> {
    return this.promise;
  }
}
