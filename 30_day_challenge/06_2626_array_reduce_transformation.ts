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

// 3. Solution
function reduce3(nums: number[], fn: Fn, init: number): number {
    if(nums.length === 1) {
        return fn(init, nums[0]);
    } else if(nums.length !== 0){
        return reduce(nums.slice(1), fn, fn(init, nums[0]));
    }

    return init;
};
