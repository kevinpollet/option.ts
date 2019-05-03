/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { OptionPromise } from "./OptionPromise";
import { from } from "./from";
import { Option } from "./Option";
import { isOption } from "./utils/isOption";

/**
 * Returns an {@link OptionPromise} instance containing the given promise resolving to an {@link Option}.
 *
 * @param value - The promise resolving to an {@link Option}
 */
export function fromPromise<A>(value: Promise<Option<A>>): OptionPromise<A>;

/**
 * Returns an {@link OptionPromise} instance containing the given promise which value is converted as an
 * {@link Option}.
 *
 * @param value - The promise
 */
export function fromPromise<A>(
  value: Promise<A>
): OptionPromise<NonNullable<A>>;

export function fromPromise(value: Promise<unknown>): OptionPromise<unknown> {
  const promise = value.then(v => (isOption(v) ? v : from(v)));
  return new OptionPromise(promise);
}
