/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "../Option";
import { None } from "../None";
import { Some } from "../Some";

export const filterNot = <A>(p: (a: A) => boolean) => (value: A): Option<A> =>
  p(value) ? None : Some(value);
