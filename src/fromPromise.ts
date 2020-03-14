/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { PromiseOption } from "./PromiseOption";
import { from } from "./from";
import { Option } from "./Option";
import { isOption } from "./utils/isOption";

/**
 * Returns an {@link PromiseOption} instance containing the given asynchronous {@link Option}.
 *
 * @param value - The asynchronous {@link Option}
 */
export function fromPromise<A>(value: Promise<Option<A>>): PromiseOption<A>;

/**
 * Returns an {@link PromiseOption} instance containing the given promise which optional value is converted as an
 * {@link Option}.
 *
 * @param value - The promise resolving to an optional value
 */
export function fromPromise<A>(
  value: Promise<A>
): PromiseOption<NonNullable<A>>;

export function fromPromise(value: Promise<unknown>): PromiseOption<unknown> {
  const promise = value.then(v => (isOption(v) ? v : from(v)));
  return new PromiseOption(promise);
}
