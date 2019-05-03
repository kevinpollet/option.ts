/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { SomeType } from "./SomeType";

/**
 * Returns an instance of {@link SomeType} containing the given value.
 *
 * @param value - The option value. This value must be defined, i.e. not `null` or `undefined`
 */
export const Some = <A>(value: NonNullable<A>): SomeType<NonNullable<A>> =>
  new SomeType(value);
