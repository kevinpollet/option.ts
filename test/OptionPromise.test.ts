/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Some } from "../src/Some";
import { OptionPromise } from "../src/OptionPromise";

describe("Some", () => {
  const value = 12;
  const option = Some(value);
  const promise = Promise.resolve(option);
  const optionPromise: OptionPromise<number> = new OptionPromise(promise);

  describe("toPromise", () => {
    it("should return the underlying promise", () =>
      expect(optionPromise.toPromise()).toBe(promise));
  });

  describe("filter", () => {
    it("should call the filter function on the underlying option", async () => {
      const fn = jest.fn(v => v === value);

      await optionPromise.filter(fn).toPromise();

      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith(value);
    });
  });

  describe("filterNot", () => {
    it("should call the filterNot function on the underlying option", async () => {
      const fn = jest.fn(v => v === value);

      await optionPromise.filterNot(fn).toPromise();

      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith(value);
    });
  });

  describe("get", () => {
    it("should call the get function on the underlying option", async () => {
      const result = await optionPromise.get();

      expect(result).toBe(value);
    });
  });

  describe("getOrElse", () => {
    it("should call the getOrElse function on the underlying option", async () => {
      const result = await optionPromise.getOrElse(23);

      expect(result).toBe(value);
    });
  });

  describe("map", () => {
    it("should call the map function on the underlying option", async () => {
      const fn = jest.fn(v => v.toString());

      await optionPromise.map(fn).toPromise();

      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith(value);
    });
  });
});
