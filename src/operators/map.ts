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

export const map = <A, B>(mapper: Function<A, B>): Function<A, Option<B>> => (
  value: A
): Option<B> => {
  const result = mapper(value);
  return result ? Some(result as NonNullable<B>) : None;
};
