/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Some } from "../src/option/Some";

describe("Some", () => {
  const value = 12;
  const some = new Some(value);

  describe("exists", () => {
    it("should return true if the wrapped value match the given predicate", () =>
      expect(some.exists(v => v === value)).toBeTruthy());

    it("should return false if the wrapped value does not match the given predicate", () =>
      expect(some.exists(v => v % 2 === 1)).toBeFalsy());
  });

  describe("isEmpty", () => {
    it("should return false", () => expect(some.isEmpty()).toBeFalsy());
  });

  describe("isDefined", () => {
    it("should return tue", () => expect(some.isDefined()).toBeTruthy());
  });

  describe("get", () => {
    it("should return the wrapped value", () => expect(some.get()).toBe(value));
  });
});
