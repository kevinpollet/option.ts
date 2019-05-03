/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

/**
 * Thrown by {@link Option.get} method to indicate that this option is empty,
 * a.k.a. is {@link None}.
 */
export class NoSuchElementError extends Error {
  constructor() {
    super("None.get");
  }
}
