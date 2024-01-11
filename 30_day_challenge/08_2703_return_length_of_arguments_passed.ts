// 1. Solution
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    return args.length
};

// 2. Solution
function argumentsLength2(...args: JSONValue[]): number {
  return argumentsLength2.arguments.length;
};