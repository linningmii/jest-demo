export function sum (...args: number[]) {
  return Array.from(args).reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
}

export function minus(...args: number[]) {
  return sum(...args);
}
