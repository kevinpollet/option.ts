/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { Some } from "./Some";
import { None } from "./None";

export const from = <A>(value: NonNullable<A> | undefined | null): Option<A> =>
  value ? Some(value) : None;
