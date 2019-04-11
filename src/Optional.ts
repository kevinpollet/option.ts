/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { None } from "./None";
import { Option } from "./Option";
import { Some } from "./Some";
import { OptionAsync } from "./OptionAsync";

export abstract class Optional {
  static readonly NONE = None.INSTANCE;

  static from<A>(value: A): Option<NonNullable<A>> {
    return value ? Optional.some(value as NonNullable<A>) : Optional.NONE;
  }

  static fromPromise<A>(promise: Promise<A>): OptionAsync<NonNullable<A>> {
    const optionAsync = promise.then(result => Optional.from(result));
    return new OptionAsync(optionAsync);
  }

  static some<A>(value: NonNullable<A>): Option<NonNullable<A>> {
    return new Some(value);
  }
}
