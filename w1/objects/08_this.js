//this???

const dogObject = {
    name: "Rex",
    breed: "Husky",
    age: 2,
    bark: function(){
        console.log("Bark!")
    },
    happyBirthday: function(){
        this.age = this.age + 1;
    }
}

dogObject.happyBirthday();

console.log(dogObject);