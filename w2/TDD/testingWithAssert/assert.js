const assert = require('assert');

// To import a function, we need to export
const { addTwo } = require('../addTwo');

const actualValue = addTwo(10,10);

assert.equal(actualValue, 20);
console.log("Test passed!")