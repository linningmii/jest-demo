import {greaterOrEqual} from "../src/greaterOrEqual";

test('3 > 1', () => {
  expect(greaterOrEqual(3, 1)).toBe(true);
});

test('2 == 2', () => {
  expect(greaterOrEqual(2, 2)).not.toBe(false);
});

test('1 < 2', () => {
  expect(greaterOrEqual(1, 2)).toBe(false);
});
