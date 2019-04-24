/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "../../src/Option";

export class DummyOption extends Option<never> {
  isDefined(): boolean {
    throw new Error("Method not implemented.");
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  get(): never {
    throw new Error("Method not implemented.");
  }
  getOrElse<B>(): B {
    throw new Error("Method not implemented.");
  }
  match<B>(): B {
    throw new Error("Method not implemented.");
  }
}
