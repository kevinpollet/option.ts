/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { None } from "../src/None";
import { from } from "../src/from";
import { SomeType } from "../src/Some";

describe("from", () => {
  it("should return None if value is undefined", () =>
    expect(from(undefined)).toBe(None));

  it("should return None if value is null", () =>
    expect(from(null)).toBe(None));

  it("should return Some if value is not undefined or null", () =>
    expect(from(2)).toBeInstanceOf(SomeType));
});
