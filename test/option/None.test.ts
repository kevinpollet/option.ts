/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "../../src/option/Option";
import { None } from "../../src/option/None";
import { NoSuchElementError } from "../../src/option/NoSuchElementError";
import { Some } from "../../src/option/Some";

describe("None", () => {
  const option: Option<number> = None;

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

      expect(option.filter(filterFn)).toBe(None);
      expect(filterFn).not.toBeCalled();
    });
  });

  describe("filterNot", () => {
    it("should always return None", () => {
      const filterNotFn = jest.fn(() => true);

      expect(option.filterNot(filterNotFn)).toBe(None);
      expect(filterNotFn).not.toBeCalled();
    });
  });

  describe("flatMap", () => {
    it("should always return None", () => {
      const flatMapFn = jest.fn(() => None);

      expect(option.flatMap(flatMapFn)).toBe(None);
      expect(flatMapFn).not.toBeCalled();
    });
  });

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

      expect(newOption).toBe(None);
      expect(mapFn).not.toBeCalled();
    });
  });

  describe("match", () => {
    it("should always return the result of matcher function none", () => {
      const noneFn = jest.fn(() => "none");
      const someFn = jest.fn((value: number) => value.toString());
      const result = option.match({ none: noneFn, some: someFn });

      expect(result).toBe("none");
      expect(noneFn).toBeCalledTimes(1);
      expect(someFn).toBeCalledTimes(0);
    });
  });

  describe("orElse", () => {
    it("should always return the alternative", () => {
      const alternativeFn = jest.fn(() => Some(12));
      const result = option.orElse(alternativeFn);

      expect(result.isDefined()).toBeTruthy();
      expect(alternativeFn).toBeCalledTimes(1);
    });
  });
});
