/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { Some } from "./Some";
import { None } from "./None";

/**
 * Returns an {@link Option} corresponding to the given optional value.
 *
 * @param value - The optional value
 * @returns {@link None} if value is not defined, `undefined` or `null`, otherwise {@link Some}.
 */
export const from = <A>(value: A): Option<NonNullable<A>> =>
  value ? Some(value as NonNullable<A>) : None;
