// 1. Solution
type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    return functions.reduceRight((prev, curr) => curr(prev), x)
  }
};

// 2. Solution
function compose2(functions: F[]) {
  if (functions.length === 0) {
    return (x) => x;
  }

  return function (x: number) {
    let result = x;
    for (let fn = functions.length - 1; fn >= 0; fn--) {
      result = functions[fn](result);
    };

    return result;
  }
}