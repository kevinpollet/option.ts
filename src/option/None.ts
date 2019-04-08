/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { NoSuchElementError } from "./NoSuchElementError";

export class None implements Option<never> {
  isEmpty(): boolean {
    return true;
  }

  isDefined(): boolean {
    return false;
  }

  get(): never {
    throw new NoSuchElementError();
  }
}
