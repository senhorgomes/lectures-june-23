//Why objects?

const favSciFiShow = ["Black Mirror", 8, "SciFi", "Netflix"];

const favComedyShow = ["Jump Street 22", 90, "Comedy", "Prime"];

// const favDramaShow = ["Succession", 4, "Drama", "Crave/Disney"]
const favDramaShow = [4, "Succession", "Crave/Disney", "Drama"];

console.log(favDramaShow[0]);

const favSciFiShowObject = {
    // key: "Value"
    name: "Black Mirror",
    amountOfSeasons: 8,
    showType: "Scifi",
    streamingPlatforms: "Netflix"
}

const favDramaShowObject = {
    // key: "Value"
    amountOfSeasons: 4,
    streamingPlatforms: "Crave/Disney",
    name: "Succession",
    showType: "Drama",
}

// When we are trying to list a single item, we should always use objects.

// When should we use arrays?
// When we we want a list of items
const listOfShows = [favSciFiShowObject, favDramaShowObject]