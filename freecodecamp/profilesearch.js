
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
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
   //if artists
  if(prop == "artist"){
    // if the property is artists then set value to artist
    if(prop == ""){
      //do nothing
    }else{
       collection[id].artist = value;
    }
   
    
  }else if(prop == "tracks"){
    //if prop is tracks check for undefined, set new or push a new track
    
    if(collection[id].tracks == "undefined"){ 
        collection[id].push({'tracks': []});
      }else{
        //nothing
      }
    //push a new track
    collection[id].tracks.push(value);
  }else{
    return "nothing done";
  }
  // if tracks
  
  
  return collection;
}

// Alter values below to test your code
updateRecords(1245, "tracks", "Addicted to Love");
