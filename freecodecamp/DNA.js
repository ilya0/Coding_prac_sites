
function pairElement(str) {
    var splitstring = str.split("");
    var returnarray =[];
    
    for(i=0; i < splitstring.length;i++){
      
      switch(splitstring[i]){
        case "A":
          returnarray.push(["A","T"]);
          break;
        case "T":
          returnarray.push(["T","A"]);
          break;
        case "C":
          returnarray.push(["C","G"]);
          break;
        case "G":
          returnarray.push(["G","C"]);
          break;
           
      }
      
      
    }
    return returnarray;
  }
  
  pairElement("ATCGA");
  