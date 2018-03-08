
function destroyer(arr) {
  var deletethese = Array.from(arguments).slice(1); // slice the second half of the argument
    
    return arr.filter(val => !deletethese.includes(val)); // return only if deletethese does not include that tested value
    
  }
  
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  