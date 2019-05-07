import {minus} from "../src/minus";

test('3 - 1 = 2', () => {
  expect(minus(3, 1)).toBe(2);
});

test('3 - 1 - 2 = 0', () => {
  expect(minus(3, 1, 2)).toBe(0);
});

test('3', () => {
  expect(minus(2)).toBe(2);
});

test('minus() === 0', () => {
  expect(minus()).toBe(0);
});

test('minus(-1 , -2 , 3) === -2', () => {
  expect(minus(-1, -2, 3)).toBe(-2);
});
