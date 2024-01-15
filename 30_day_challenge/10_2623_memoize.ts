// 1. Solution
type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
  const cache = {};
  return function (...args) {
    const key = String(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  }
}
