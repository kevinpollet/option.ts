/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Function } from "./Function";

export interface Option<A> {
  chain<B>(op: Function<A, Option<B>>): Option<B>;

  get(): A;

  getOrElse<B>(defaultValue: B): A | B;

  match<B>({ None, Some }: { None: () => B; Some: Function<A, B> }): B;
}
