/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { None } from "./None";

export class Some<A> implements Option<A> {
  private readonly value: NonNullable<A>;

  constructor(value: NonNullable<A>) {
    this.value = value;
  }

  exists(p: (value: Readonly<A>) => boolean): boolean {
    return p(this.value);
  }

  filter(p: (value: Readonly<A>) => boolean): Option<A> {
    return p(this.value) ? this : None.INSTANCE;
  }

  get(): A {
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

    return new Some(mappedValue);
  }
}
