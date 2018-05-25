
function permAlone(str) {
    var allPerms = []; // arry to store all the permuations
    var strArray = str.split(""); //intial string array
    var currentLetter;
    
      //go through initail string 
      for(i=0; i < strArray.length; i++){//iterate through the array
        currentLetter = strArray[i];
        //console.log("currentletter is "+currentLetter);
        
        if(allPerms.length == 0){ 
          // if the array is zero just push in
          allPerms.push(currentLetter);
        }else{
              
                    var tempArray = []; // this is to hold all the permuations
                   
  
                    for(index = 0; index < allPerms.length; index++){ //int array stores perms 
                      
                        var tempholder = []; //temp holder for current current element
  
                        //set tempholder to all perms
                        tempholder = allPerms.slice(0); //copy existing perms 
                        console.log("tempholder = allPerms ")
                        console.log(tempholder);
  
                        //splice currentletter to index
                       tempholder.splice(index,0,currentLetter); 
                        console.log("tempholder after splice ")
                        console.log(tempholder)
  
  
                        var conCat = tempholder.join(''); //join all array ['a','b'] = 'ab'
                        console.log("conCat "+conCat); 
                        tempArray.push(conCat);
                        console.log("temparray is")
                        console.log(tempArray);
  
                        allPerms = tempArray;
                    //coppy int array to new array
                    
  
                      }
                  
  
                
          
        }
      }
  
    // creates iteration and saves in the array
  
    
    return allPerms;
    }
    
    permAlone('aabc');
    