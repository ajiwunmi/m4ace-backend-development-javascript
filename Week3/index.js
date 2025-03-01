import sum from './sum.js';
import maxNumber from './max_number.js';
import helloWorld from './hello_world.js';
import print_one_to_ten from './number_one_to_ten.js';


console.log("*************************************************");
console.log("              Week 3 Homework                      ");
console.log("*************************************************");
const a = 3;
const b = 9;
const total = sum(a, b);  
console.log(`Sum of ${a} and ${b} numbers is ${total}`); 

console.log("--------------------------------------------------------")
helloWorld();

console.log("--------------------------------------------------------")
print_one_to_ten();
console.log("--------------------------------------------------------")

const arr = [3, 7, 2, 9, 12, 87, 83, 89];
const max = maxNumber(arr);
console.log(`Given array  ${arr} `);

console.log(`Maximum number in the array is ${max}`);

console.log("--------------------------------------------------------");
