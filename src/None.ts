/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { NoSuchElementError } from "./NoSuchElementError";

class NoneType<A> extends Option<A> {
  get(): never {
    throw new NoSuchElementError();
  }

  getOrElse<B>(defaultValue: B): B {
    return defaultValue;
  }

  isDefined(): boolean {
    return false;
  }

  isEmpty(): boolean {
    return true;
  }

  match<B>({ None }: { None: () => B }): B {
    return None();
  }
}

export const None = new NoneType<never>();
