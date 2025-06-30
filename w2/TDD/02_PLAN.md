# Coffee Order Function -> Function takes in a name, a specific order(name, size, dairy, sugar)
# And outputs an object which is the drink itself


# What does it mean?

## Inputs

name = String => Drip Coffee, Latte, Cappuccino
size = String => Small, Medium, Large
dairy = String => Milk, Almond, Soy
sugar = Number => 0 - 5

## Output

An Object

```js
{
    name: "",
    size: "",
    dairy: "",
    sugar: 0
}
```

## Edge Cases/Paths

### Happy path -> A user utilizes our function correctly

- A user inserts all the correct inputs, and the function returns the correct object

### Unhappy path -> How a user can break our function

- Incorrect size -> Size isn't one of the three available options
- Incorrect inputs/types
- Incorrect dairy option
- Incorrect coffee type
- Incorrect sugar quantity -> Number must be lesser than 5 and greater than 0.




