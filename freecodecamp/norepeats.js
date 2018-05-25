
function permAlone(str) {
  var permArray = []; // arry to store all the permuations
  var strArray = str.split("") //intial string array
  var currentLetter;
  
    //go through initail string 
    for(i=0; i < strArray.length; i++){//iterate through the array
      currentLetter = strArray[i];
      console.log(currentLetter);
      
      if(permArray.length == 0){ 
        // if the array is zero just push in
        permArray.push(currentLetter);
      }else{
        console.log("creaing perm");
        createPerm();
      }
    }

  // creates iteration and saves in the array
    function createPerm(){
      var tempArray = []; // this is to hold all the permuations
      console.log("Go through permuations");

      for(i=0; i < permArray.length; i++){
      var tempholder = permArray; //copy existing perms
      tempholder = tempholder.splice(i,1,currentLetter); //splice currentletter to index
      tempholder = tempholder.join(''); //join all array
      tempArray.push(tempholder);
        //use currentLetter and create a permutation
        // i is the index where the number is placed
        // concatinated with currentLetter
        // push into temp array

      }
      return permArray = tempArray;
        // save permArray to be tempArray
    }
  
  return permArray;
  }
  
  permAlone('aab');
  