/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";

export class Some<T> implements Option<T> {
  private readonly value: NonNullable<T>;

  constructor(value: NonNullable<T>) {
    this.value = value;
  }

  isEmpty(): boolean {
    return false;
  }

  isDefined(): boolean {
    return true;
  }

  get(): T {
    return this.value;
  }
}
