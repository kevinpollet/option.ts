/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

export interface Option<A> {
  exists(fn: (value: Readonly<A>) => boolean): boolean;

  filter(fn: (value: Readonly<A>) => boolean): Option<A>;

  filterNot(fn: (value: Readonly<A>) => boolean): Option<A>;

  flatMap<B>(fn: (value: Readonly<A>) => Option<B>): Option<B>;

  forEach(fn: (value: A) => void): void;

  get(): A;

  getOrElse(value: A): A;

  isDefined(): boolean;

  isEmpty(): boolean;

  map<B>(fn: (value: Readonly<A>) => B): Option<B>;

  orElse(value: Option<A>): Option<A>;
}
