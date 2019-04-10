/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { NoSuchElementError } from "../src/NoSuchElementError";

describe("NoSuchElementError", () => {
  describe("constructor", () => {
    it("should return an instance of NoSuchElementError extending Error", () => {
      const error = new NoSuchElementError();

      expect(error).toBeInstanceOf(NoSuchElementError);
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("None.get");
    });
  });
});
