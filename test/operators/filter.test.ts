/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { from } from "../../src/from";
import { filter } from "../../src/operators/filter";
import { None } from "../../src/None";
import { Some } from "../../src/Some";

describe("filter", () => {
  const option = from(12);

  it("should return Some if the given predicate is verified", () => {
    const result = option.chain(filter(x => x % 2 === 0));

    expect(result).toEqual(Some(12));
  });

  it("should return None if the given predicate is not verified", () => {
    const result = option.chain(filter(x => x % 2 !== 0));

    expect(result).toBe(None);
  });
});
