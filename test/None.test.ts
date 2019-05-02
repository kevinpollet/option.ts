/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "../src/Option";
import { None } from "../src/None";
import { NoSuchElementError } from "../src/NoSuchElementError";
import { Some } from "../src/Some";

describe("None", () => {
  const fn = jest.fn();
  const option: Option<number> = None;

  afterEach(() => fn.mockReset());

  describe("exists", () => {
    it("should return false", () => {
      expect(option.exists(fn)).toBeFalsy();
      expect(fn).not.toBeCalled;
    });
  });

  describe("filter", () => {
    it("should return None", () => {
      expect(option.filter(fn)).toBe(None);
      expect(fn).not.toBeCalled;
    });
  });

  describe("filterNot", () => {
    it("should return None", () => {
      expect(option.filterNot(fn)).toBe(None);
      expect(fn).not.toBeCalled;
    });
  });

  describe("flatMap", () => {
    it("should return None", () => {
      expect(option.flatMap(fn)).toBe(None);
      expect(fn).not.toBeCalled;
    });
  });

  describe("forEach", () => {
    it("should return None", () => {
      option.forEach(fn);

      expect(option).toBe(None);
      expect(fn).not.toBeCalled;
    });
  });

  describe("get", () => {
    it("should throw NoSuchElementError", () =>
      expect(() => option.get()).toThrowError(NoSuchElementError));
  });

  describe("getOrElse", () => {
    it("should return the given default value", () => {
      const defaultValue = 24;

      expect(option.getOrElse(defaultValue)).toBe(defaultValue);
    });
  });

  describe("isDefined", () => {
    it("should return false", () => expect(option.isDefined()).toBeFalsy());
  });

  describe("isEmpty", () => {
    it("should return true", () => expect(option.isEmpty()).toBeTruthy());
  });

  describe("map", () => {
    it("should return None", () => {
      expect(option.map(fn)).toBe(None);
      expect(fn).not.toBeCalled;
    });
  });

  describe("match", () => {
    it("should call None function", () => {
      const matcher = { None: jest.fn(), Some: jest.fn() };

      option.match(matcher);

      expect(matcher.None).toBeCalledTimes(1);
      expect(matcher.Some).not.toBeCalled;
    });
  });

  describe("orElse", () => {
    it("should return the alternative", () => {
      const alternative = Some(12);
      const option: Option<number> = None;

      expect(option.orElse(alternative)).toBe(alternative);
    });
  });
});
