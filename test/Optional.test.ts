/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { None } from "../src/option/None";
import { Optional } from "../src/option/Optional";
import { Some } from "../src/option/Some";

describe("Optional", () => {
  describe("NONE", () => {
    it("should return an instance of None", () =>
      expect(Optional.NONE).toBeInstanceOf(None));

    it("should always return the same instance", () =>
      expect(Optional.NONE).toBe(Optional.NONE));
  });

  describe("some", () => {
    it("should return an instance of Some", () =>
      expect(Optional.some(2)).toBeInstanceOf(Some));
  });

  describe("option", () => {
    it("should return an instance of None if value is undefined", () =>
      expect(Optional.from(undefined)).toBeInstanceOf(None));

    it("should return an instance of None if value is null", () =>
      expect(Optional.from(null)).toBeInstanceOf(None));

    it("should return an instance of Some if value is not undefined and null", () =>
      expect(Optional.from(2)).toBeInstanceOf(Some));
  });
});
