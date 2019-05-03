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
 * Returns `true` if the given value is an {@link Option}, otherwise `false`.
 *
 * @param value - The value to test
 */
export const isOption = <A>(value: unknown): value is Option<A> => {
  return value && (value instanceof NoneType || value instanceof SomeType);
};
