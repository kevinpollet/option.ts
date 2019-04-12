/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { Option } from "./Option";
import { Matcher } from "./Matcher";
import { Some } from "./Some";
import { None } from "./None";

export class OptionPromise<A> {
  private readonly optionPromise: Promise<Option<A>>;

  constructor(optionPromise: Promise<Option<A>>) {
    this.optionPromise = optionPromise;
  }

  filter(p: (value: Readonly<A>) => boolean): OptionPromise<A> {
    const filteredOptionPromise = this.optionPromise.then(option =>
      option.filter(p)
    );

    return new OptionPromise(filteredOptionPromise);
  }

  filterNot(p: (value: Readonly<A>) => boolean): OptionPromise<A> {
    const filteredOptionPromise = this.optionPromise.then(option =>
      option.filterNot(p)
    );

    return new OptionPromise(filteredOptionPromise);
  }

  flatMap<B>(
    m: (value: Readonly<A>) => Option<B> | OptionPromise<B>
  ): OptionPromise<B> {
    const mappedOptionPromise = this.optionPromise.then(option =>
      option.match({
        none: async () => None as Option<B>,
        some: async value => {
          const result = m(value);
          return result instanceof OptionPromise ? result.toPromise() : result;
        },
      })
    );

    return new OptionPromise(mappedOptionPromise);
  }

  map<B>(
    m: (value: Readonly<A>) => NonNullable<B> | Promise<NonNullable<B>>
  ): OptionPromise<B> {
    const mappedOptionPromise = this.optionPromise.then(option =>
      option.match({
        none: async () => None as Option<NonNullable<B>>,
        some: async value => {
          const mappedValue = await m(value);
          return Some(mappedValue);
        },
      })
    );

    return new OptionPromise(mappedOptionPromise);
  }

  match<B>(matcher: Matcher<A, B>): Promise<B> {
    return this.optionPromise.then(option => option.match(matcher));
  }

  get(): Promise<A> {
    return this.optionPromise.then(option => option.get());
  }

  getOrElse(defaultValue: A): Promise<A> {
    return this.optionPromise.then(option => option.getOrElse(defaultValue));
  }

  orElse(f: () => Option<A>): OptionPromise<A> {
    return new OptionPromise(
      this.optionPromise.then(option => option.orElse(f))
    );
  }

  toPromise(): Promise<Option<A>> {
    return this.optionPromise;
  }
}
