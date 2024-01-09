// 1. Solution
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    return nums.reduce((prev, curr) => fn(prev, curr), init)
};