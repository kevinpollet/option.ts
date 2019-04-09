/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { MapFn, PredicateFn } from "./FnTypes";

export interface Option<A> {
  exists(p: PredicateFn<A>): boolean;

  filter(p: PredicateFn<A>): Option<A>;

  filterNot(p: PredicateFn<A>): Option<A>;

  get(): A;

  getOrElse(f: () => A): A;

  isDefined(): boolean;

  isEmpty(): boolean;

  map<B>(m: MapFn<A, B>): Option<B>;

  orUndefined(): A | undefined;
}
