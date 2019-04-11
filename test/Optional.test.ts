/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { None } from "../src/None";
import { Optional } from "../src/Optional";
import { Some } from "../src/Some";

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

  describe("from", () => {
    it("should return an instance of None if value is undefined", () =>
      expect(Optional.from(undefined)).toBeInstanceOf(None));

    it("should return an instance of None if value is null", () =>
      expect(Optional.from(null)).toBeInstanceOf(None));

    it("should return an instance of Some if value is not undefined or null", () =>
      expect(Optional.from(2)).toBeInstanceOf(Some));
  });

  describe("fromPromise", () => {
    it("should return an instance of promise resolving to None if promise value is undefined", async () => {
      const resolvedOption = await Optional.fromPromise(
        Promise.resolve(undefined)
      ).toPromise();

      expect(resolvedOption).toBeInstanceOf(None);
    });

    it("should return an instance of promise resolving to None if promise value is null", async () => {
      const resolvedOption = await Optional.fromPromise(
        Promise.resolve(null)
      ).toPromise();

      expect(resolvedOption).toBeInstanceOf(None);
    });

    it("should return an instance of promise resolving to Some if promise value is not undefined or null", async () => {
      const resolvedOption = await Optional.fromPromise(
        Promise.resolve(12)
      ).toPromise();

      expect(resolvedOption).toBeInstanceOf(Some);
    });
  });
});
