export function greaterOrEqual(a: number, b: number) {
  if (a === b) {
    return true;
  }

  if (a > b) {
    return true;
  }

  return false;
}
