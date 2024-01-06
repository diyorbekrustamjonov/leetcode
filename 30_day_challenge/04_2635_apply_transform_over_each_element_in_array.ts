//1. Solution
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }

    return result;
};

//2. Solution
function map2(arr: number[], fn: (n: number, i: number) => number): number[] {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i)
    }
    return arr;
};