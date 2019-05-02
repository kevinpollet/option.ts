/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

export interface Option<A> {
  exists(fn: (value: A) => boolean): boolean;

  filter(fn: (value: A) => boolean): Option<A>;

  filterNot(fn: (value: A) => boolean): Option<A>;

  flatMap<B>(fn: (value: A) => Option<B>): Option<B>;

  get(): A;

  getOrElse(value: A): A;

  isDefined(): boolean;

  isEmpty(): boolean;

  map<B>(fn: (value: A) => B): Option<B>;

  orElse(value: Option<A>): Option<A>;
}
