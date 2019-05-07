import {sum} from "../src/sum";

test('1 + 1 = 2', () => {
  expect(sum(1 + 1)).toBe(2);
});

test('1 + 2 + 3 = 6', () => {
  expect(sum(1 + 2 + 3)).toBe(6);
});
