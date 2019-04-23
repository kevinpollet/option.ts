/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { UnaryFunction } from "./UnaryFunction";
import { Option } from "./Option";

// eslint-disable-next-line
export interface ChainFunction<A, B>
  extends UnaryFunction<Option<A>, Option<B>> {}
