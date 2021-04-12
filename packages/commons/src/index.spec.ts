import { x, add } from '.';

test('test add', () => {
  expect(x).toBe(1);

  expect(add(1, 1)).toBe(2);
});
