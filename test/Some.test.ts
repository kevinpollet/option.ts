/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "../src/Option";
import { Some } from "../src/Some";
import { None } from "../src/None";

describe("Some", () => {
  const value = 12;
  const option: Option<number> = Some(12);

  describe("constructor", () => {
    it("should throw a TypeError if given value is null", () =>
      expect(() => Some(null as unknown)).toThrow(TypeError));

    it("should throw a TypeError if given value is undefined", () =>
      expect(() => Some(undefined as unknown)).toThrow(TypeError));
  });

  describe("exists", () => {
    it("should return true", () => {
      const fn = jest.fn(v => v === value);

      expect(option.exists(fn)).toBeTruthy();
      expect(fn).toBeCalledTimes(1);
      expect(fn).toBeCalledWith(value);
    });

    it("should return false", () => {
      const fn = jest.fn(v => v !== value);

      expect(option.exists(fn)).toBeFalsy();
      expect(fn).toBeCalledTimes(1);
      expect(fn).toBeCalledWith(value);
    });
  });

  describe("filter", () => {
    it("should return this option", () => {
      const fn = jest.fn(v => v === value);

      expect(option.filter(fn)).toBe(option);
      expect(fn).toBeCalledTimes(1);
      expect(fn).toBeCalledWith(value);
    });

    it("should return None", () => {
      const fn = jest.fn(v => v !== value);

      expect(option.filter(fn)).toBe(None);
      expect(fn).toBeCalledTimes(1);
      expect(fn).toBeCalledWith(value);
    });
  });

  describe("filterNot", () => {
    it("should return this option", () => {
      const fn = jest.fn(v => v !== value);

      expect(option.filterNot(fn)).toBe(option);
      expect(fn).toBeCalledTimes(1);
      expect(fn).toBeCalledWith(value);
    });

    it("should return None", () => {
      const fn = jest.fn(v => v === value);

      expect(option.filterNot(fn)).toBe(None);
      expect(fn).toBeCalledTimes(1);
      expect(fn).toBeCalledWith(value);
    });
  });

  describe("flatMap", () => {
    it("should return the new option", () => {
      const newOption = Some(value.toString());
      const fn = jest.fn(() => newOption);

      expect(option.flatMap(fn)).toBe(newOption);
      expect(fn).toBeCalledTimes(1);
      expect(fn).toBeCalledWith(value);
    });
  });

  describe("forEach", () => {
    it("should apply the given side effect function and return this option", () => {
      const option: Option<{ value: number }> = Some({ value });
      const fn = jest.fn(v => (v.value += 1));

      option.forEach(fn);

      expect(option).toBe(option);
      expect(option).toEqual(Some({ value: value + 1 }));
      expect(fn).toBeCalledTimes(1);
    });
  });

  describe("get", () => {
    it("should return the option value", () =>
      expect(option.get()).toBe(value));
  });

  describe("getOrElse", () => {
    it("should return the option value", () =>
      expect(option.getOrElse(24)).toBe(value));
  });

  describe("isDefined", () => {
    it("should return true", () => expect(option.isDefined()).toBeTruthy());
  });

  describe("isEmpty", () => {
    it("should return false", () => expect(option.isEmpty()).toBeFalsy());
  });

  describe("map", () => {
    it("should return a defined option containing the mapped value", () => {
      const fn = jest.fn(v => v.toString());

      expect(option.map(fn)).toEqual(Some(value.toString()));
      expect(fn).toBeCalledTimes(1);
      expect(fn).toBeCalledWith(value);
    });
  });

  describe("orElse", () => {
    it("should return this option", () => {
      const alternative = Some(12);

      expect(option.orElse(alternative)).toBe(option);
    });
  });
});
