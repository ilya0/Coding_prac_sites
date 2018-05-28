
function updateInventory(currentarray, newarray) {

    //test if exists in both arrays, if it doesnt push into new array
    //if exists in curinv, find amount sum and push to new array
    // return new array
    
    for(i=0; i < newarray.length; i++){ //iterate through new
        
  
      for(j=0; j < currentarray.length; j++){ //iterate compare curr
  
          if(currentarray[j][1] === newarray[i][1]){
            console.log("summing "+newarray[i][1]);
            currentarray[i][0] += newarray[j][0];
            // if they have same name, sum and equal current arr
          }else if(j == currentarray.length){
            console.log("pushing "+newarray[j])
            //else create new array
            currentarray.push(newarray[j]);
          }
      }
    }
    
    
      return currentarray;
  }
  
  
  
  updateInventory([
    [21, "Bowling Ball"], 
    [2, "Dirty Sock"], 
    [1, "Hair Pin"], 
    [5, "Microphone"]], 
  
    [[2, "Hair Pin"], 
    [3, "Half-Eaten Apple"], 
    [67, "Bowling Ball"], 
    [7, "Toothpaste"]]) 
  
  //[[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]