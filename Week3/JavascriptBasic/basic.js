// 1. Function to calculate the sum of two numbers
function sum(a, b) {
	return a + b;
}

// 2. Program to print "Hello, World!" and log the current date
console.log("Hello, World!");
console.log("Current Date:", new Date().toLocaleString());

// 3. Program to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
	console.log(i);
}

// 4. Function to find the largest number in an array
function findLargestNumber(arr) {
	if (arr.length === 0) return undefined; // Handle empty array case
	return Math.max(...arr);
}

function maxNumber (arr){
    if (arr.length === 0) return undefined; // Handle empty array case
		let max = arr[0]; // Initialize max with the first element
		for (let num of arr) {
			if (num > max) {
				max = num;
			}
		}
		return max;
}


console.log(
	"Maximum number in [3, 7, 2, 9, 12]:",
	maxNumber([3, 7, 2, 9, 12])
);
// Example usage:
console.log("Sum of 5 and 10:", sum(5, 10));
console.log(
	"Largest number in [3, 7, 2, 9, 12]:",
	findLargestNumber([3, 7, 2, 9, 12])
);
