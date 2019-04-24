/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { DummyOption } from "./utils/DummyOption";
import { None } from "../src/None";

describe("Option", () => {
  describe("chain", () => {
    it("should always return the value returned by the chain function", () => {
      const dummy = new DummyOption();
      const chainFn = jest.fn(() => None);
      const result = dummy.chain(chainFn);

      expect(result).toBe(None);
      expect(chainFn).toBeCalledWith(dummy);
      expect(chainFn).toBeCalledTimes(1);
    });
  });
});
