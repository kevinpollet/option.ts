/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { UnaryFunction } from "../UnaryFunction";
import { Option } from "../Option";
import { None } from "../None";
import { Some } from "../Some";
import { ChainFunction } from "../ChainFunction";

export const map = <A, B>(mapper: UnaryFunction<A, B>): ChainFunction<A, B> => (
  option: Option<A>
): Option<B> =>
  option.match({
    None: () => None,
    Some: value => {
      const result = mapper(value);
      return result ? Some(result as NonNullable<B>) : None;
    },
  });
