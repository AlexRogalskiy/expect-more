import api = require('../src');

it('passes when nothing other than the listed values are present in the given array', () => {
  const sameInstance = {};
  expect(api.isArrayIncludingOnly([1, 2], [1, 2])).toEqual(true);
  expect(api.isArrayIncludingOnly([1, 2])([2, 1])).toEqual(true);
  expect(api.isArrayIncludingOnly([1, 2], [2, 1, 2, 1])).toEqual(true);
  expect(api.isArrayIncludingOnly([1, sameInstance], [sameInstance, 1])).toEqual(true);
});

it('rejects otherwise', () => {
  const reference1 = {};
  const reference2 = {};
  expect(api.isArrayIncludingOnly([1, 2], [1, 2, 3])).toEqual(false);
  expect(api.isArrayIncludingOnly([1, 2], [])).toEqual(false);
  expect(api.isArrayIncludingOnly([], [])).toEqual(false);
  expect(api.isArrayIncludingOnly([], [1])).toEqual(false);
  expect(api.isArrayIncludingOnly([reference1], [reference2])).toEqual(false);
});
