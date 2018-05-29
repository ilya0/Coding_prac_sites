
function pairwise(arr, arg) {
    var indexCounter = 0;
    var arrCopy = arr.slice();
    
    for(i=0; i < arrCopy.length; i++){
      
      for(j = i+1; j <arrCopy.length; j++){
        
        if(arrCopy[i] + arrCopy[j] == arg){
          indexCounter += i + j;
          arrCopy[i] = arrCopy[j] = NaN;
        }
      }
      
    }
   
    
    
    return indexCounter;
  }
  
  // test each element with another element
  // if they sum, sum indexes and pop both
  
  
  pairwise([1,4,2,3,0,5], 7);
  