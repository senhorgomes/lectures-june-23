

// Create a function that adds two numbers together
function addTwo(number1, number2){
    return number1 + number2;
}
function addThree(number1, number2){
    return number1 + number2;
}

// console.log(addTwo(10,10)); //Manual testing
// Actual
// console.log(addTwo(1,3)); // Expect to return = 4
// console.log(addTwo(7,10)); // Expect to return = 17
// Not inserting the correct inputs, Numbers only, needs to be 2 numbers
// Too many numbers

module.exports = {addTwo, addThree};

// Doesn't tell us if we passed our test
// The errors/failures are a bit too verbose
