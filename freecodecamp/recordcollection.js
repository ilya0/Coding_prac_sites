
// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ "Let It Rock", "You Give Love a Bad Name" ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
//if not tracks and not empty set prop to id.prop


//if value = "" and prop != "", delete prop

if(prop == "tracks" && collection[id].tracks == "undefined" && value != ""){
//if prop = tracks and tracks = null, tracks = [] and add to empty array
collection[id].tracks = [];
collection[id].tracks.push(value);
}else if(prop == "tracks" && collection[id].tracks != "undefined"){
// if prop = trackks and tracks = [], push tracks
collection[id].tracks.push(prop);

}else if( prop == "artist"){
collection[id].artist = value;

}
return collection;
}



// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

