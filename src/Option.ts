/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Matcher } from "./Matcher";

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
  exists(p: (value: Readonly<A>) => boolean): boolean;

  /**
   * Returns this Option if it is nonempty and the predicate p is verified.
   * Otherwise, return None.
   *
   * @param p - The predicate function.
   */
  filter(p: (value: Readonly<A>) => boolean): Option<A>;

  /**
   * Returns this Option if it is nonempty and the predicate p is not verified.
   * Otherwise, return None.
   *
   * @param p - The predicate function.
   */
  filterNot(p: (value: Readonly<A>) => boolean): Option<A>;

  /**
   * Returns the result of applying the mapping function to this Option value if is nonempty.
   * Returns None if this Option is empty or the mapping function returns None.
   *
   * @param m - The mapping function.
   */
  flatMap<B>(m: (value: Readonly<A>) => Option<B>): Option<B>;

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
  map<B>(m: (value: Readonly<A>) => NonNullable<B>): Option<B>;

  /**
   * Returns the result of applying the matcher function some if Option is nonempty.
   * Otherwise the matcher function none result.
   *
   * @param matcher - The matcher object.
   */
  match<B>(matcher: Matcher<A, B>): B;

  /**
   * Returns this Option if it is nonempty, otherwise return the result of evaluating alternative.
   *
   * @param f - The alternative function.
   */
  orElse(f: () => Option<A>): Option<A>;
}
