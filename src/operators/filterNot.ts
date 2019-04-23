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

export const filterNot = <A>(
  predicate: UnaryFunction<A, boolean>
): ChainFunction<A, A> => (option: Option<A>): Option<A> =>
  option.match({
    None: () => None,
    Some: value => (predicate(value) ? None : Some(value as NonNullable<A>)),
  });
