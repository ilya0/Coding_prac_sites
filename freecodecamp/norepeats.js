
function permAlone(str) {
    var permArray = []; // arry to store all the permuations
    var strArray = str.split("") //create array of input letters
    var currentLetter;
    
    
      //creates the iteration with the input letter
      for(i=0; i < strArray.length; i++){
        //iterate through the array
        currentLetter = strArray[i];
        console.log(currentLetter);
    
        if(permArray.length == 0){
          permArray.push(currentLetter);
        }else{
          //go through perm process 
        }
    
      }
    
      function createPerm(){
    
      }
    
    return permArray;
    }
    
    permAlone('aab');
    