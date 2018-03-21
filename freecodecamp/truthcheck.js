
function truthCheck(collection, pre) {
  // Is everyone being true?
  var returning = true;
  for(var i = 0; i < collection.length; i++){
    console.log("collection[i][pre] is " +collection[i][pre]);
    
    if(collection[i][pre] === "" || collection[i][pre] === "null" || isNaN(collection[i][pre]) || collection[i][pre] === undefined){
      
      returning = false;
    }
  }
  return returning;
}



//true
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");


---- almost works

function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}
