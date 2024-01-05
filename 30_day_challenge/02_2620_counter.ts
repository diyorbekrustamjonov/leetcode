//1. Solution
function createCounter(n: number): () => number {
    let counter = n
    return function(): number {
        return counter++;
    }
}


//2. Solution
function createCounter2(n: number): () => number {
    return function(): number {
        return n++
    }
}