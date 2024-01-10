// 1. Solution
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    return nums.reduce((prev, curr) => fn(prev, curr), init)
};

// 2. Solution
function reduce2(nums: number[], fn: Fn, init: number): number {
    for(let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i])
    }

    return init;
};