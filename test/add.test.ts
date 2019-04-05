/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { add } from "../src/add";

describe("add", () => {
  it("should return the addition of the given operands", () => {
    const result = add(2)(3);
    expect(result).toBe(5);
  });
});
