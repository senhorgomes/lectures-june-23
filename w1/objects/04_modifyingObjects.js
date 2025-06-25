// Reassinging key values

const favDramaShowObject = {
    // key: "Value"
    amountOfSeasons: 4,
    streamingPlatforms: "Crave/Disney",
    name: "Succession",
    showType: "Drama",
    // favSeason = 3
}
// To reassign key values, all we need to do is fetch the key value, with square or dot notation and reassign it
favDramaShowObject.amountOfSeasons = 5;
favDramaShowObject["amountOfSeasons"] = 5;

// To assign new key value pairs, we can use the same logic
favDramaShowObject["favSeason"] = 3;

delete favDramaShowObject["streamingPlatforms"] //with square or dot notation



// Modifying objects via functions

function modifyObject(object){
    // We know functions can modify the keys within an object
    object.streamingPlatforms = "Netflix";
    // Modifying the WHOLE object
    // object = {};
}

modifyObject(favDramaShowObject);

// console.log(favDramaShowObject);


// Cloning Objects

const favDramaShowObjectClone = {...favDramaShowObject};
favDramaShowObjectClone.season = 7;

console.log(favDramaShowObjectClone)
console.log("original", favDramaShowObject)
