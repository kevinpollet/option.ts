/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Some } from "../src/Some";
import { OptionPromise } from "../src/OptionPromise";

describe("Some", () => {
  const option = Some(12);
  const promise = Promise.resolve(option);
  const optionPromise: OptionPromise<number> = new OptionPromise(promise);

  describe("asPromise", () => {
    it("should return the underlying promise", () =>
      expect(optionPromise.asPromise()).toBe(promise));
  });

  describe("map", () => {
    it("should call the map function on the underlying option", async () => {
      const fn = jest.fn(v => v.toString());

      await optionPromise.map(fn);

      expect(fn).toBeCalledTimes(1);
      expect(fn).toBeCalledWith(option.get());
    });
  });
});
