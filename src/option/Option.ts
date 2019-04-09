/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

export interface Option<A> {
  exists(p: (value: Readonly<A>) => boolean): boolean;
  filter(p: (value: Readonly<A>) => boolean): Option<A>;
  get(): A;
  isDefined(): boolean;
  isEmpty(): boolean;
  map<B>(m: (value: Readonly<A>) => NonNullable<B>): Option<B>;
}
