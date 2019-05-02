/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "../Option";
import { NoneType } from "../NoneType";
import { SomeType } from "../SomeType";

/**
 * Type guard returning `true` if the given value is an {@link Option}, `false` otherwise.
 *
 * @param value - The value to check
 * @returns `true` if the given value is an {@link Option}, `false` otherwise
 */
export const isOption = <A>(value: unknown): value is Option<A> => {
  return value && (value instanceof NoneType || value instanceof SomeType);
};
