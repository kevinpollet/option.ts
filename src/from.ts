/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { OptionPromise } from "./OptionPromise";
import { None } from "./None";
import { Some } from "./Some";

export function from<A>(value: Promise<A>): OptionPromise<NonNullable<A>>; // eslint-disable-line
export function from<A>(value: A): Option<NonNullable<A>>; // eslint-disable-line

// eslint-disable-next-line
export function from<A>(
  value: A | Promise<A>
): OptionPromise<NonNullable<A>> | Option<NonNullable<A>> {
  if (value instanceof Promise) {
    const optionPromise = value.then(result => from(result));
    return new OptionPromise(optionPromise);
  }
  return value ? Some(value as NonNullable<A>) : None;
}
