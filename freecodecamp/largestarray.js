largestarray.js

not working
function largestOfFour(arr) {
  var largestnumber = 0;
  var largearray = [];


  arr.map(function(subarray){
    var subarraycount = subarray.length;

    subarray.map(function(subarrayindex){

      while(subarraycount > 0){
        if(subarrayindex > largestnumber){
          largestnumber = subarrayindex;
        }
      subarraycount--;
      }
      largearray.push(largestnumber);

    });
  });

  return largearray;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


-----

function largestOfFour(arr) {
  return arr.map(function(group){
    return group.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
    });
  });
}

