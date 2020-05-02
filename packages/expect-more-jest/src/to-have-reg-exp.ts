import { isRegExp } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * Asserts that ${value} is a `RegExp`.
       * @example
       * expect({ child: { grandchild: new RegExp('i am a regular expression') } }).toHaveRegExp('child.grandchild');
       */
      toHaveRegExp(propPath: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a `RegExp`.
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.toHaveRegExp('child.grandchild'));
       */
      toHaveRegExp<T>(propPath: string): JestMatchers<T>;
    }
  }
}

export const toHaveRegExpMatcher = (value: any, propPath: string) =>
  createResult({
    message: () => `expected value at '${printExpected(propPath)}' to be a regular expression`,
    notMessage: () =>
      `expected value at '${printExpected(propPath)}' not to be a regular expression`,
    pass: isRegExp(getIn(propPath.split('.'), value)),
  });

expect.extend({ toHaveRegExp: toHaveRegExpMatcher });
