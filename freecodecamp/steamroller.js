//recursive flattening

var data = [[1,2,3], [7], [8,9,0]];

var flatten = function(arr){
  var flatMap = []; // int Array
  
  arr.forEach(function(value){ // foreach loop on every element
  
    if(Array.isArray(value)){ // if element is an array
      flatMap = flatMap.concat(flatten(value)) // concatenate and re run recursion
    }
    else{ // if the element is not push it into flat map array
      flatMap.push(value)
    }
    
  });
  return flatMap;
}

var result = flatten(data);

console.log(result);