/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { hello } from "../src/hello";

describe("hello", () => {
  it("should return the greeting message", () => {
    const message = hello("John");

    expect(message).toBe("Hello John");
  });
});
