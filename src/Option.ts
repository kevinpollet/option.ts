/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

/**
 * Represents an optional value. Instances of {@link Option} are either
 * an instance of {@link SomeType} to represent a non-empty option or the
 * object {@link None}.to represent an empty option.
 */
export interface Option<A> {
  /**
   * Returns `true` if this option is non-empty and the predicate function
   * applied to this option's value returns `true`, `false` otherwise.
   *
   * @param fn - The predicate function
   */
  exists(fn: (value: Readonly<A>) => boolean): boolean;

  /**
   * Returns this option if it is non-empty and the predicate function applied
   * to this option's value returns `true`, otherwise {@link None}.
   *
   * @param fn - The predicate function.
   */
  filter(fn: (value: Readonly<A>) => boolean): Option<A>;

  /**
   * Returns this option if it is non-empty and the predicate function applied
   * to this option's value returns `false`, otherwise {@link None}.
   *
   * @param fn - The predicate function
   */
  filterNot(fn: (value: Readonly<A>) => boolean): Option<A>;

  /**
   * Returns the result of applying the given function if this option is non-empty.
   *
   * @param fn - The function to apply
   */
  flatMap<B>(fn: (value: Readonly<A>) => Option<B>): Option<B>;

  /**
   * Returns the result of applying the given function if this option is non-empty,
   * otherwise returns the given default value.
   *
   * @param defaultValue - The default value to return if empty
   * @param fn - The function to apply if non-empty
   */
  fold<B>(defaultValue: B, fn: (value: A) => B): B;

  /**
   * Apply the given side effect function if the option is non-empty.
   *
   * @param fn - The side effect function to apply
   */
  forEach(fn: (value: A) => void): void;

  /**
   * Returns the option value.
   */
  get(): A;

  /**
   * Returns the option value if the option is non-empty, otherwise return the given value.
   *
   * @param value - The value to return if the option is empty
   */
  getOrElse(value: A): A;

  /**
   * Returns `true` if the option is an instance of {@link SomeType}, `false` otherwise.
   */
  isDefined(): boolean;

  /**
   * Returns `true` if the option is the object {@link None}, `false` otherwise.
   */
  isEmpty(): boolean;

  /**
   * Returns the result of applying the given function if this option is non-empty,
   * otherwise {@link None}.
   *
   * @param fn - The function to apply if non-empty
   */
  map<B>(fn: (value: Readonly<A>) => B): Option<NonNullable<B>>;

  /**
   * Returns the result of applying the given `None` function if this option is empty, otherwise
   * the result of applying the given `Some` function.
   *
   * @param matcher - The matcher object
   */
  match<B>(matcher: { None: () => B; Some: (value: A) => B }): B;

  /**
   * Returns this option if it is non-empty, otherwise return the given option.
   *
   * @param option - The option to return if this option is empty.
   */
  orElse(option: Option<A>): Option<A>;
}
