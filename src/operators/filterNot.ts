/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { UnaryFunction } from "../UnaryFunction";
import { ChainFunction } from "../ChainFunction";
import { filter } from "./filter";

export const filterNot = <A>(
  predicate: UnaryFunction<A, boolean>
): ChainFunction<A, A> => filter((value: A) => !predicate(value));
