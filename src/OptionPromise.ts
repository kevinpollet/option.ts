/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";

/**
 * Represents an asynchronous option.
 */
export class OptionPromise<A> {
  private readonly value: Promise<Option<A>>;

  constructor(value: Promise<Option<A>>) {
    this.value = value;
  }

  /**
   * Returns an {@link OptionPromise} instance containing the result of applying the
   * {@link Option.filter} method to the underlying asynchronous option.
   *
   * @param fn - The predicate function
   */
  filter(fn: (value: Readonly<A>) => boolean): OptionPromise<A> {
    const filteredValue = this.value.then(option => option.filter(fn));
    return new OptionPromise(filteredValue);
  }

  /**
   * Returns an {@link OptionPromise} instance containing the result of applying the
   * {@link Option.filterNot} method to the underlying asynchronous option.
   *
   * @param fn - The predicate function
   */
  filterNot(fn: (value: Readonly<A>) => boolean): OptionPromise<A> {
    const filteredValue = this.value.then(option => option.filterNot(fn));
    return new OptionPromise(filteredValue);
  }

  /**
   * Returns a {@link Promise} instance resolving to the underlying asynchronous option's
   * value if it is non-empty, otherwise the returned promise will reject.
   */
  get(): Promise<A> {
    return this.value.then(option => option.get());
  }

  /**
   * Returns a {@link Promise} instance resolving to the underlying asynchronous option
   * value if non-empty, otherwise the returned promise will resolve to the given value.
   */
  getOrElse(value: A): Promise<A> {
    return this.value.then(option => option.getOrElse(value));
  }

  /**
   * Returns an {@link OptionPromise} instance containing the result of applying the given
   * function to the underlying asynchronous option if it is non-empty.
   *
   * @param fn - The function to apply
   */
  map<B>(fn: (value: A) => B): OptionPromise<NonNullable<B>> {
    const mappedValue = this.value.then(option => option.map(fn));
    return new OptionPromise(mappedValue);
  }

  /**
   * Returns the underlying asynchronous option.
   */
  toPromise(): Promise<Option<A>> {
    return this.value;
  }
}
