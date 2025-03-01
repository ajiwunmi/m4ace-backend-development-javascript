const maxNumber = (numbers) => {
    console.log(" 4. Maximum number in an array");
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}


export default maxNumber;
