
function uniteUnique(arr) {
  
    arr = [].concat(...arguments);
    
    return [...new Set(arr)];
    return arr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);