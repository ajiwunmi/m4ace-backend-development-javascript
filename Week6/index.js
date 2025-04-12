// 1. Filter even numbers and sum using reduce
function processNumbers(arr) {
	// Filter even numbers
	const evens = arr.filter((num) => num % 2 === 0);

	// Sum using reduce
	const sum = arr.reduce((acc, num) => acc + num, 0);

	return {
		evens,
		sum,
	};
}

// 2. Flatten nested array using ES6
function flattenArray(nestedArray) {
	return nestedArray.flat();
}

// 3. TypedArray operations
function typedArrayOperations() {
	// Create and populate Uint8Array
	const typedArray = new Uint8Array(5);
	typedArray.set([10, 20, 30, 40, 50]);

	console.log("Original TypedArray:", typedArray);

	// Reverse and display (TypedArrays don't have reverse(), so we convert to regular array)
	const reversed = new Uint8Array([...typedArray].reverse());
	console.log("Reversed TypedArray:", reversed);

	return {
		original: typedArray,
		reversed,
	};
}

// 4. Conversion between regular array and TypedArray
function arrayToTypedArray(arr) {
	return new Uint8Array(arr);
}

function typedArrayToArray(typedArray) {
	return Array.from(typedArray);
}

// Example usage
console.log("--- Number Processing ---");
const numbers = [1, 2, 3, 4, 5, 6];
const processed = processNumbers(numbers);
console.log("Even numbers:", processed.evens);
console.log("Sum:", processed.sum);

console.log("\n--- Array Flattening ---");
const nested = [[1, 2], [3, 4], [5]];
console.log("Flattened array:", flattenArray(nested));

console.log("\n--- TypedArray Operations ---");
typedArrayOperations();

console.log("\n--- Conversion Functions ---");
const regularArray = [1, 2, 3, 4, 5];
const convertedTypedArray = arrayToTypedArray(regularArray);
console.log("To TypedArray:", convertedTypedArray);
console.log("Back to regular array:", typedArrayToArray(convertedTypedArray));
