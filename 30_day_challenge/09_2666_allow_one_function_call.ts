// 1. Solution
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
  let is_call = false;
  return function (...args) {
    if (is_call) return undefined;
    is_call = true;
    return fn(...args);
  };
}