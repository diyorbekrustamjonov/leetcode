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

// 2. Solution
function filter2(arr: number[], fn: Fn): number[] {
    const filteredArray : number[] = [];

    for(let i = 0; i < arr.length; i++)
    {
        if(fn(arr[i],i)){
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
};