import formatPrice from '../../client/src/lib/humanReadable';

describe('formatPrice', () => {
  test('should add a dollar sign', () => {
    expect(formatPrice('3.99')).toEqual('$3.99');
  });

  test('should replace 0 with Free to Play', () => {
    expect(formatPrice('0.00')).toEqual('Free to Play');
  });
});
