
function truthCheck(collection, pre) {
    // Is everyone being true?
    var returning = true;
    for(var i = 0; i < collection.length; i++){
      console.log("collection[i][pre] is " +collection[i][pre]);
      
      if(collection[i][pre] === "" || 
         collection[i][pre] === null || 
         isNaN(collection[i]) || 
         collection[i][pre] === undefined){
        
        returning = false;
      }
    }
    return returning;
  }
  
  
  //true
  truthCheck([{"name": "Pete", "onBoat": true}, 
              {"name": "Repeat", "onBoat": true, "alias": "Repete"}, 
              {"name": "FastFoward", "onBoat": true}], "onBoat");