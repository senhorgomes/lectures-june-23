//How can we iterate(or loop) through objects?

// Arrays-> for..of, for, .forEach, while, etc

const favDramaShowObject = {
    amountOfSeasons: 4,
    streamingPlatforms: "Crave/Disney",
    name: "Succession",
    showType: "Drama",
    nestedObject: {
        // key: "Value"
        name: "Black Mirror",
        amountOfSeasons: 8,
        showType: "Scifi",
        streamingPlatforms: "Netflix"
    }
    // sometimes it can have other keys that it inherited
}

const favSciFiShow = ["Black Mirror", 8, "SciFi", "Netflix"];
// For..in

for(const key in favSciFiShow){
    // console.log(key)
    // But how do we loop through the key values?
    // console.log(favDramaShowObject[key]);
    console.log(key);
}

// Create an array based off the key values and keys
const arrayOfKeys = Object.keys(favDramaShowObject);
const arrayOfKeyValues = Object.values(favDramaShowObject);
const arrayOfTheObject = Object.entries(favDramaShowObject);
// console.log(arrayOfKeys)

for(const keyValuePair of arrayOfTheObject){
    console.log(keyValuePair[1]);
}