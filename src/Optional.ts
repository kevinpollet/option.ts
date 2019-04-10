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
  static readonly NONE = None.INSTANCE;

  static from<A>(value: NonNullable<A> | undefined | null): Option<A> {
    return value ? Optional.some(value) : Optional.NONE;
  }

  static some<A>(value: NonNullable<A>): Option<A> {
    return new Some(value);
  }
}
