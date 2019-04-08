/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { None } from "./None";
import { Option } from "./Option";
import { Some } from "./Some";

export abstract class Optional {
  static readonly NONE = new None();

  static from<T>(value: NonNullable<T> | undefined | null): Option<T> {
    return value ? Optional.some(value) : Optional.NONE;
  }

  static some<T>(value: NonNullable<T>): Option<T> {
    return new Some(value);
  }
}
