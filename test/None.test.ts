/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "../src/Option";
import { None } from "../src/None";
import { NoSuchElementError } from "../src/NoSuchElementError";

describe("None", () => {
  const option: Option<number> = None;

  describe("get", () => {
    it("should throw NoSuchElementError", () =>
      expect(() => option.get()).toThrowError(NoSuchElementError));
  });

  describe("getOrElse", () => {
    it("should return the default value", () => {
      const defaultValue = 24;

      expect(option.getOrElse(defaultValue)).toBe(defaultValue);
    });
  });

  describe("pipe", () => {
    it("should always return None", () =>
      expect(option.pipe(x => x * 2)).toBe(None));
  });
});
