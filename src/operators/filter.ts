/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { ChainFunction } from "../ChainFunction";
import { UnaryFunction } from "../UnaryFunction";
import { Option } from "../Option";
import { None } from "../None";
import { Some } from "../Some";

export const filter = <A>(
  predicate: UnaryFunction<A, boolean>
): ChainFunction<A, A> => (option: Option<A>): Option<A> =>
  option.match({
    None: () => None,
    Some: value => (predicate(value) ? Some(value as NonNullable<A>) : None),
  });
