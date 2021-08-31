import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveDateOnOrAfter()', () => {
  expect({ child: { grandchild: new Date('2019-12-31') } }).toHaveDateOnOrAfter(
    'child.grandchild',
    new Date('2019-12-15'),
  );
});
