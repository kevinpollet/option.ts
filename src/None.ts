/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { NoneType } from "./NoneType";

/**
 * The empty option singleton.
 */
export const None = new NoneType<never>();
