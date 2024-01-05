// Interface of Counter
type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

//1. Solution
function createCounter(init: number): Counter {
    let counter = init
    return {
        increment: (): number => ++counter,
        decrement: (): number => --counter,
        reset: (): number => {
            counter = init
            return init;
        },
    }
}

//2. Solution
function createCounter2(init: number): Counter {
    let counter = init;
    function increment(): ReturnType<Counter["increment"]> {
        return ++counter;
    }

    function decrement(): ReturnType<Counter["decrement"]> {
        return --counter;
    }

    function reset(): ReturnType<Counter["reset"]> {
        counter = init
        return counter;
    }

    return {
        increment,
        decrement,
        reset
    }
}