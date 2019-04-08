/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { None } from "../src/option/None";
import { NoSuchElementError } from "../src/option/NoSuchElementError";

describe("None", () => {
  const none = new None();

  describe("exists", () => {
    it("should return false", () => expect(none.exists()).toBeFalsy());
  });

  describe("isEmpty", () => {
    it("should return true", () => expect(none.isEmpty()).toBeTruthy());
  });

  describe("isDefined", () => {
    it("should return false", () => expect(none.isDefined()).toBeFalsy());
  });

  describe("get", () => {
    it("should throw NoSuchElementError", () =>
      expect(() => none.get()).toThrowError(NoSuchElementError));
  });
});
