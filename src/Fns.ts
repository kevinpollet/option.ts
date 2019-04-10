/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

type Fn<A, B> = (value: A) => B;

type PredicateFn<A> = Fn<Readonly<A>, boolean>;

type MapFn<A, B> = Fn<Readonly<A>, B>;

export { PredicateFn, MapFn };
