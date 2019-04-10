/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { MapFn, PredicateFn, Matcher } from "./FnTypes";

/**
 * Option monad interface.
 *
 * @public
 */
export interface Option<A> {
  /**
   * Returns true if this option is nonempty and the predicate p is verified.
   * Otherwise, returns false.
   *
   * @param p - The predicate function.
   */
  exists(p: PredicateFn<A>): boolean;

  /**
   * Returns this Option if it is nonempty and the predicate p is verified.
   * Otherwise, return None.
   *
   * @param p - The predicate function.
   */
  filter(p: PredicateFn<A>): Option<A>;

  /**
   * Returns this Option if it is nonempty and the predicate p is not verified.
   * Otherwise, return None.
   *
   * @param p - The predicate function.
   */
  filterNot(p: PredicateFn<A>): Option<A>;

  /**
   * Returns the result of applying the mapping function to this Option value if is nonempty.
   * Returns None if this Option is empty or the mapping function returns None.
   *
   * @param m - The mapping function.
   */
  flatMap<B>(m: MapFn<A, Option<B>>): Option<B>;

  /**
   * Returns the option's value.
   */
  get(): A;

  /**
   * Returns the option's value if the option is nonempty,
   * the default value otherwise.
   *
   * @param defaultValue - The default value.
   */
  getOrElse(defaultValue: A): A;

  /**
   * Returns true if the option is an instance of Some, false otherwise.
   */
  isDefined(): boolean;

  /**
   * Returns true if the option is None, false otherwise.
   */
  isEmpty(): boolean;

  /**
   * Returns an Option containing the result of applying the mapping function
   * to this Option's value, if it is nonempty.
   *
   * @param m - The mapping function.
   */
  map<B>(m: MapFn<A, B>): Option<B>;

  /**
   * Returns the result of applying the matcher function some if Option is nonempty.
   * Otherwise the matcher function none result.
   *
   * @param matcher - The matcher object.
   */
  match<B>(matcher: Matcher<A, B>): B;

  /**
   * Returns the option's value if it is nonempty, or undefined if it is empty.
   */
  orUndefined(): A | undefined;
}
