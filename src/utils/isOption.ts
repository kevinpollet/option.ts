/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "../Option";

export const isOption = <B>(p: B | Option<B>): p is Option<B> =>
  (p as Option<B>).get !== undefined;
