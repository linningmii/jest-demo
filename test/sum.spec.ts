import {sum} from "../src/sum";

test('1 + 1 = 2', () => {
  expect(sum(1, 1)).toBe(2);
});

test('1 + 2 + 3 = 6', () => {
  expect(sum(1, 2, 3)).toBe(6);
});

test('1 + 2 + 4 != 8', () => {
  expect(sum(1, 2, 4)).not.toBe(8);
});

test('sum() = 0', () => {
  expect(sum()).toBe(0);
});
