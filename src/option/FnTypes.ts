/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

type MapFn<A, B> = (value: Readonly<A>) => NonNullable<B>;

type PredicateFn<A> = (value: Readonly<A>) => boolean;

export { MapFn, PredicateFn };
