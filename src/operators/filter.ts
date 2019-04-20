/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Function } from "../Function";
import { Option } from "../Option";
import { None } from "../None";
import { Some } from "../Some";

export const filter = <A>(
  predicate: Function<A, boolean>
): Function<A, Option<A>> => (value: A): Option<A> =>
  predicate(value) ? Some(value) : None;
