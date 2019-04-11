/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { None } from "../src/None";
import { Option } from "../src/Option";
import { Some } from "../src/Some";

describe("Some", () => {
  const value = 12;
  const option: Option<number> = new Some(12);

  describe("exists", () => {
    it("should return true if exist function return true", () => {
      const existFn = jest.fn(() => true);

      expect(option.exists(existFn)).toBeTruthy();
      expect(existFn).toBeCalledTimes(1);
      expect(existFn).toBeCalledWith(value);
    });

    it("should return false if exist function return false", () => {
      const existFn = jest.fn(() => false);

      expect(option.exists(existFn)).toBeFalsy();
      expect(existFn).toBeCalledTimes(1);
      expect(existFn).toBeCalledWith(value);
    });
  });

  describe("filter", () => {
    it("should return Some if predicate function return true", () => {
      const filterFn = jest.fn(() => true);

      expect(option.filter(filterFn)).toBe(option);
      expect(filterFn).toBeCalledTimes(1);
      expect(filterFn).toBeCalledWith(value);
    });

    it("should return None if predicate function return false", () => {
      const filterFn = jest.fn(() => false);

      expect(option.filter(filterFn)).toBe(None.INSTANCE);
      expect(filterFn).toBeCalledTimes(1);
      expect(filterFn).toBeCalledWith(value);
    });
  });

  describe("filterNot", () => {
    it("should return Some if predicate function return false", () => {
      const filterNotFn = jest.fn(() => false);

      expect(option.filterNot(filterNotFn)).toBe(option);
      expect(filterNotFn).toBeCalledTimes(1);
      expect(filterNotFn).toBeCalledWith(value);
    });

    it("should return None if predicate function return true", () => {
      const filterNotFn = jest.fn(() => true);

      expect(option.filterNot(filterNotFn)).toBe(None.INSTANCE);
      expect(filterNotFn).toBeCalledTimes(1);
      expect(filterNotFn).toBeCalledWith(value);
    });
  });

  describe("flatMap", () => {
    it("should return the flatMap function result", () => {
      const flatMapFn = jest.fn(() => new Some(value.toString()));
      const newOption = option.flatMap(flatMapFn);

      expect(newOption).toBeInstanceOf(Some);
      expect(newOption.get()).toBe(value.toString());
      expect(flatMapFn).toBeCalledTimes(1);
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

  describe("isEmpty", () => {
    it("should return false", () => expect(option.isEmpty()).toBeFalsy());
  });

  describe("isDefined", () => {
    it("should return tue", () => expect(option.isDefined()).toBeTruthy());
  });

  describe("map", () => {
    it("should return a new Option with the mapped value", () => {
      const mapFn = jest.fn((v: number) => v.toString());
      const newOption = option.map(mapFn);

      expect(newOption).toBeInstanceOf(Some);
      expect(newOption.get()).toBe(value.toString());
      expect(mapFn).toBeCalledTimes(1);
      expect(mapFn).toBeCalledWith(value);
    });
  });

  describe("match", () => {
    it("should always return the result of matcher function some", () => {
      const noneFn = jest.fn(() => "none");
      const someFn = jest.fn((v: number) => v.toString());
      const result = option.match({ none: noneFn, some: someFn });

      expect(result).toBe(value.toString());
      expect(noneFn).toBeCalledTimes(0);
      expect(someFn).toBeCalledTimes(1);
    });
  });

  describe("orElse", () => {
    it("should always return this Option", () => {
      const alternativeFn = jest.fn(() => new Some(12));
      const result = option.orElse(alternativeFn);

      expect(result).toBe(option);
      expect(alternativeFn).not.toBeCalled();
    });
  });
});
