const maxNumber = (numbers) => {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}


const arr = [3, 7, 2, 9, 12, 87, 83, 89];
console.log(`Maximum number in ${arr} is 
    ${maxNumber(arr)}`);
