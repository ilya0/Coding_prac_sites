
function updateInventory(currentarray, newarray) {

  //test if exists in both arrays, if it doesnt push into new array
  //if exists in curinv, find amount sum and push to new array
  // return new array

  for(i=0; i < newarray.length; i++){ //iterate through new


    for(j=0; j < currentarray.length; j++){ //iterate compare curr


        if(newarray[i][1] == currentarray[j][1] && newarray[i][1]!= "null"){
          console.log("summing "+newarray[i][1]);
          currentarray[i][0] += newarray[j][0];
           newarray[i][1] = "null";
          // if they have same name, sum and equal current arr
        }

        console.log(" new array loop "+newarray);
      }

       
    }

 
  //push thing that are left
  for(k=0; k < newarray.length; k++){
    if(newarray[k][1]!= "null") {
       currentarray.push(newarray[k]);
    }
  }
  

  //sort algo
  currentarray.sort(function(a,b){
    if(a[1]> b[1]){
      return 1;
    }
    if(a[1] < b[1]){
      return -1;
    }
    return 0;
  });
  
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
[7, "Toothpaste"]]);