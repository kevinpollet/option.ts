/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { isOption } from "../../src/utils/isOption";
import { Some } from "../../src/Some";
import { None } from "../../src/None";

describe("isOption", () => {
  it("should return true if given value is Some", () =>
    expect(isOption(Some(12))).toBeTruthy());

  it("should return true if given value is None", () =>
    expect(isOption(None)).toBeTruthy());

  it("should return false if given value is not an Option", () =>
    expect(isOption(null)).toBeFalsy());

  it("should return false if given value is undefined", () =>
    expect(isOption(undefined)).toBeFalsy());

  it("should return false if given value is null", () =>
    expect(isOption({})).toBeFalsy());
});
