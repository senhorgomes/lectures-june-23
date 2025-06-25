//Two ways to look up values in objects
// 
// const favComedyShow = ["Jump Street 22", 90, "Comedy", "Prime"];
// favComedyShow[0];

const favDramaShowObject = {
    // key: "Value"
    amountOfSeasons: 4,
    streamingPlatforms: "Crave/Disney",
    name: "Succession",
    "showType": "Drama",
    // 0: "zero"
}

const randomString = "showType";
const name = "random";

// Square bracket notation
console.log(favDramaShowObject.randomKey[randomString]);

// Dot notation
// It thinks that "randomString" is a key inside of our object
// console.log(favDramaShowObject.randomString.secondKey.thirdKey);
// console.log(favDramaShowObject["randomString"]["secondKey"]["thirdKey"]);

console.log(favDramaShowObject["0"])

