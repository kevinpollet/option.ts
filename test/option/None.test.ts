/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "../../src/option/Option";
import { None } from "../../src/option/None";
import { NoSuchElementError } from "../../src/option/NoSuchElementError";

describe("None", () => {
  const option: Option<number> = None.INSTANCE;

  describe("exists", () => {
    it("should always return false", () => {
      const existFn = jest.fn(() => true);

      expect(option.exists(existFn)).toBeFalsy();
      expect(existFn).not.toBeCalled();
    });
  });

  describe("filter", () => {
    it("should always return None", () => {
      const filterFn = jest.fn(() => true);

      expect(option.filter(filterFn)).toBe(None.INSTANCE);
      expect(filterFn).not.toBeCalled();
    });
  });

  describe("get", () => {
    it("should throw NoSuchElementError", () =>
      expect(() => option.get()).toThrowError(NoSuchElementError));
  });

  describe("isEmpty", () => {
    it("should return true", () => expect(option.isEmpty()).toBeTruthy());
  });

  describe("isDefined", () => {
    it("should return false", () => expect(option.isDefined()).toBeFalsy());
  });

  describe("map", () => {
    it("should always return None", () => {
      const mapFn = jest.fn((value: number) => value.toString());
      const newOption = option.map(mapFn);

      expect(newOption).toBe(None.INSTANCE);
      expect(mapFn).not.toBeCalled();
    });
  });
});
