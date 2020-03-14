/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Some } from "../src/Some";
import { PromiseOption } from "../src/PromiseOption";

describe("Some", () => {
  const value = 12;
  const option = Some(value);
  const promise = Promise.resolve(option);
  const promiseOption: PromiseOption<number> = new PromiseOption(promise);

  describe("toPromise", () => {
    it("should return the underlying promise", () =>
      expect(promiseOption.toPromise()).toBe(promise));
  });

  describe("filter", () => {
    it("should call the filter function on the underlying option", async () => {
      const fn = jest.fn(v => v === value);

      await promiseOption.filter(fn).toPromise();

      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith(value);
    });
  });

  describe("filterNot", () => {
    it("should call the filterNot function on the underlying option", async () => {
      const fn = jest.fn(v => v === value);

      await promiseOption.filterNot(fn).toPromise();

      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith(value);
    });
  });

  describe("get", () => {
    it("should call the get function on the underlying option", async () => {
      const result = await promiseOption.get();

      expect(result).toBe(value);
    });
  });

  describe("getOrElse", () => {
    it("should call the getOrElse function on the underlying option", async () => {
      const result = await promiseOption.getOrElse(23);

      expect(result).toBe(value);
    });
  });

  describe("map", () => {
    it("should call the map function on the underlying option", async () => {
      const fn = jest.fn(v => v.toString());

      await promiseOption.map(fn).toPromise();

      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith(value);
    });
  });
});
