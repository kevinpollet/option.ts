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

  describe("constructor", () => {
    it("should throw a TypeError if given value is null", () =>
      expect(() => Some(null as any)).toThrow(TypeError)); // eslint-disable-line @typescript-eslint/no-explicit-any

    it("should throw a TypeError if given value is undefined", () =>
      expect(() => Some(undefined as any)).toThrow(TypeError)); // eslint-disable-line @typescript-eslint/no-explicit-any
  });

  describe("get", () => {
    it("should return the wrapped value", () =>
      expect(option.get()).toBe(value));
  });

  describe("getOrElse", () => {
    it("should return the wrapped value", () =>
      expect(option.getOrElse(24)).toBe(value));
  });

  describe("isDefined", () => {
    it("should return true", () => expect(Some(1).isDefined()).toBeTruthy());
  });

  describe("isEmpty", () => {
    it("should return false", () => expect(Some(1).isEmpty()).toBeFalsy());
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
