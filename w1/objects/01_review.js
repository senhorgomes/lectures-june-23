//Primitive Data Types?

// Boolean = true/false
// String = "Hello"/""
// Numbers = positive numbers, negative numbers / 0
// Null = false
// Undefined = false

// Data structures
// Arrays = [1,2,3] / []
// Object = {}

// Symbol

function checkFalseyValues(dataValue){
    if(dataValue){
        console.log("This is truthy!")
    } else {
        console.log("This is falsey!")
    }
}

checkFalseyValues([undefined, null, undefined])
