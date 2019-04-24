/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { from } from "../../src/from";
import { flatMap } from "../../src/operators/flatMap";
import { Some } from "../../src/Some";

describe("flatMap", () => {
  const option = from(12);

  it("should return the returned option", () => {
    const result = option.chain(flatMap(x => Some(x * 2)));
    expect(result).toEqual(Some(24));
  });
});
