// 1. Solution
type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
  const newArr = [];
  arr.map((val: number, ind: number) => {
      if (fn(val, ind)){
          newArr.push(val)
      }
  });
  return newArr;
};