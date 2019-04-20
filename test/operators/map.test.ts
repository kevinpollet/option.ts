/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { from } from "../../src/from";
import { map } from "../../src/operators/map";
import { Some } from "../../src/Some";

describe("map", () => {
  const option = from(12);

  it("should return Some with the mapped value", () => {
    const result = option.chain(map(x => x * 2));

    expect(result).toEqual(Some(24));
  });
});
