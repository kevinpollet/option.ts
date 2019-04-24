/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { UnaryFunction } from "../UnaryFunction";
import { Option } from "../Option";
import { None } from "../None";
import { ChainFunction } from "../ChainFunction";

export const flatMap = <A, B>(
  mapper: UnaryFunction<A, Option<B>>
): ChainFunction<A, B> => (option: Option<A>): Option<B> =>
  option.match({
    None: () => None,
    Some: value => mapper(value),
  });
