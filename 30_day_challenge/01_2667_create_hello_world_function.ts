// 1. Solution
function createHelloWorld() {
	return function (...args): string {
		return 'Hello World'
	}
}

// 2. Solution
function createHelloWorld2() {
	const staticText = 'Hello World'
	return function (...args): string {
		return staticText
	}
}

// 3. Solution
function createHelloWorld3() {
	return () => 'Hello World'
}

// 4. Solution
const createHelloWorld4 = () => () => "Hello World";
