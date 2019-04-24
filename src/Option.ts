/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { ChainFunction } from "./ChainFunction";
import { UnaryFunction } from "./UnaryFunction";

export abstract class Option<A> {
  chain<B>(op: ChainFunction<A, B>): Option<B>;

  chain<B, C>(op1: ChainFunction<A, B>, op2: ChainFunction<B, C>): Option<C>;

  chain<B, C, D>(
    op1: ChainFunction<A, B>,
    op2: ChainFunction<B, C>,
    op3: ChainFunction<C, D>
  ): Option<D>;

  chain<B, C, D, E>(
    op1: ChainFunction<A, B>,
    op2: ChainFunction<B, C>,
    op3: ChainFunction<C, D>,
    op4: ChainFunction<D, E>
  ): Option<E>;

  chain<B, C, D, E, F>(
    op1: ChainFunction<A, B>,
    op2: ChainFunction<B, C>,
    op3: ChainFunction<C, D>,
    op4: ChainFunction<D, E>,
    op5: ChainFunction<E, F>
  ): Option<E>;

  chain<B, C, D, E, F, G>(
    op1: ChainFunction<A, B>,
    op2: ChainFunction<B, C>,
    op3: ChainFunction<C, D>,
    op4: ChainFunction<D, E>,
    op5: ChainFunction<E, F>,
    op6: ChainFunction<F, G>
  ): Option<G>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chain(this: Option<any>, ...ops: ChainFunction<any, any>[]): Option<any> {
    const reducer = <A, B>(
      acc: Option<A>,
      op: ChainFunction<A, B>
    ): Option<B> => op(acc);

    return ops.reduce(reducer, this);
  }

  abstract get(): A;

  abstract getOrElse<B>(defaultValue: B): A | B;

  abstract isDefined(): boolean;

  abstract isEmpty(): boolean;

  abstract match<B>({
    None,
    Some,
  }: {
    None: () => B;
    Some: UnaryFunction<A, B>;
  }): B;
}
