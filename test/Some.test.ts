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
