/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { None } from "./None";
import { Some } from "./Some";

export function from<A>(value: Promise<A>): Promise<Option<A>>;

export function from<A>(value: A): Option<NonNullable<A>>;

export function from<A>(
  value: A | Promise<A>
): Promise<Option<NonNullable<A>>> | Option<NonNullable<A>> {
  return value instanceof Promise
    ? value.then(result => from(result))
    : value
    ? Some(value as NonNullable<A>)
    : None;
}
