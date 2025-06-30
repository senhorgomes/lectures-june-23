const { assert } = require("chai");
const LarrysCoffee = require("../coffeeOrder");

describe("Testing LarrysCoffee, ", ()=> {
    // Insert more test suite descriptions, or we can write a test
    xit("A user inserts all the correct inputs, and the function returns the correct object", ()=> {
        // Insert our tests/assertions

        // The actual and compare it to the expected
        const actualCoffeeOrder = LarrysCoffee("Drip Coffee", "Small", "Almond", 3);
        const expectedCoffeeOrder = {
            name: "Drip Coffee",
            size: "Small",
            dairy: "Almond",
            sugar: 3
        }
        assert.deepEqual(actualCoffeeOrder, expectedCoffeeOrder);

    });

    xit("Incorrect size -> Size isn't one of the three available options", () => {
        // Incorrect order
        const actualCoffeeOrder = LarrysCoffee("Drip Coffee", "Extra Small", "Almond", 3);
        // What should be our output?
        const expectedMessage = "Please select a correct size from the following options: Small, Medium, or Large."
        assert.equal(actualCoffeeOrder, expectedMessage);
    })

})