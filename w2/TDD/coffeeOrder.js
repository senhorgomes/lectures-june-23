// Function that takes in a name, size, dairy, sugar

function LarrysCoffee(name, size, dairy, sugar){

  // List of available options
  const sizeOptions = ["Small", "Medium", "Large"];

  // Check to see if 'size' is one of the available options
  if(!sizeOptions.includes(size)){
    return "Please select a correct size from the following options: Small, Medium, or Large.";
  }

  const coffeeOrderObject = {
    name: name,
    size: size,
    dairy: dairy,
    sugar: sugar
  }

  return coffeeOrderObject;

}

module.exports = LarrysCoffee;