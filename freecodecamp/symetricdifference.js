
function sym(args) {
    var argsArray = [].slice.call(arguments); //slice args into a single array
    
    
    function catArrays(arr1,arr2){
      // store unique values
      var uniqueValues = [];
      
      for(i=0; i < arr1.length; i++){
        
        if(arr2.indexOf(arr1[i]) < 0 && uniqueValues.indexOf(arr1[i]) < 0 ){
           uniqueValues.push(arr1[i]);
           }
      }
      
      
      arr2.forEach(function(item){
        if(arr1.indexOf(item) < 0 && uniqueValues.indexOf(item) < 0){
          uniqueValues.push(item);
        }
      });
      
      return uniqueValues;
    }
    
    
    return argsArray.reduce(catArrays);
    
    
    
    //cross check all the arrays
    // sum the unique 
  }
  
  sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])
  