export function minus(...args: number[]) {
  if (args.length === 0) {
    return 0;
  }

  if (args.length === 1) {
    return args[0];
  }

  return Array.from(args).reduce((previousValue, currentValue, index) => {
    return previousValue - currentValue;
  });
}
