import student from './student.js';
import getFullResponseFromAPI from "./apiResponse.js";
import { printHello } from './printHello.js';
import getSystemInfo from './systemInfo.js';


const greetStudent = (student) => {
    const {name, level, department} = student;
    console.log(`Hello, ${name}`);
    console.log(`You are in level ${level} and you are studying ${department}`);
}

const displayStudent = (student) => {
    for(const key in student){
        console.log(key, student[key]);
    }
// 
}

greetStudent(student);

console.log("--------------------------------------------------------");
displayStudent(student);


// Example usage:
getFullResponseFromAPI(true)
	.then((response) => console.log(response))
	.catch((error) => console.error(error.message));

getFullResponseFromAPI(false)
	.then((response) => console.log(response))
	.catch((error) => console.error(error.message));


console.log("----------------------Stert Print Hello----------------------------------");
printHello();

console.log("---------------------------End -----------------------------");


getSystemInfo();
