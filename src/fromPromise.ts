/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { OptionPromise } from "./OptionPromise";
import { from } from "./from";

export const fromPromise = <A>(value: Promise<A>): OptionPromise<A> => {
  return new OptionPromise(value.then(from));
};
