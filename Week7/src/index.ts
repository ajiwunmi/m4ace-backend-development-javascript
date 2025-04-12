function getFirstElement<T>(arr: T[]): T {
	if (arr.length === 0) {
		throw new Error("Array is empty");
	}
	return arr[0];
}


// With number array
const numbers = [1, 2, 3];
const firstNumber = getFirstElement(numbers); // Type: number | undefined

// With string array
const strings = ["hello", "world"];
const firstString = getFirstElement(strings); // Type: string | undefined

// With custom type array
interface Person {
  name: string;
  age: number;
}
const people: Person[] = [{ name: "Alice", age: 30 }];
const firstPerson = getFirstElement(people); // Type: Person | undefined
