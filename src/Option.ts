/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { ChainFunction } from "./ChainFunction";
import { UnaryFunction } from "./UnaryFunction";

export abstract class Option<A> {
  chain<B>(op: ChainFunction<A, B>): Option<B> {
    return op(this);
  }

  abstract get(): A;

  abstract getOrElse<B>(defaultValue: B): A | B;

  abstract match<B>({
    None,
    Some,
  }: {
    None: () => B;
    Some: UnaryFunction<A, B>;
  }): B;
}
