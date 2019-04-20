/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "../src/Option";
import { Some } from "../src/Some";

describe("Some", () => {
  const value = 12;
  const option: Option<number> = Some(12);

  describe("chain", () => {
    it("should return Some containing the returned value", () =>
      expect(option.chain(() => Some(2))).toEqual(Some(2)));

    it("should return the returned Option", () => {
      const newOption = Some(12);

      expect(option.chain(() => newOption)).toBe(newOption);
    });
  });

  describe("get", () => {
    it("should return the wrapped value", () =>
      expect(option.get()).toBe(value));
  });

  describe("getOrElse", () => {
    it("should return the wrapped value", () =>
      expect(option.getOrElse(24)).toBe(value));
  });

  describe("match", () => {
    it("should call and return the Some function result", () => {
      const noneFn = jest.fn(() => false);
      const someFn = jest.fn(() => true);
      const matcher = { None: noneFn, Some: someFn };

      expect(option.match(matcher)).toBeFalsy;
      expect(noneFn).toBeCalledTimes(0);
      expect(someFn).toBeCalledTimes(1);
    });
  });
});
