
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
  if(prop == "artist" && value != ""){
    
           collection[id].artist = value;
  

    
  }else if(prop == "tracks" && value !== ""){
    //if prop is tracks check for undefined, set new 

    if(collection[id].tracks === undefined) collection[id].tracks = []; 
 
      //take tracks save to var
      var temptracks = collection[id].tracks;
      // add tracks to var
      console.log("saved tracks from collection -  " +temptracks);
      temptracks = temptracks + value;
      console.log("temptracks, value - "+ temptracks, value );
      // set var equal to tracks in obj
    collection[id].tracks = [temptracks];
    
    
    
  
  }else{
    return "nothing done";
  }
  // if tracks
  
  
  return collection;
}

// Alter values below to test your code
updateRecords(2548, "tracks", "");
