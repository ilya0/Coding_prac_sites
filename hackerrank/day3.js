<<<<<<< HEAD
var rotatearray = function(arrayinput,rotation){

  var temparray = arrayinput;
  var rotatecounter = 0;

  while(rotatecounter < rotation){
    var rotateholder = temparray.slice(0,1);
    temparray.shift();
    temparray.push(rotateholder)
    rotatecounter++;

  }
  console.log(temparray);
}
var testarray = ["1","2","3","a","b","c"]


rotatearray(testarray,3);


//code works
=======
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}


// Objective
// In this challenge, we're getting started with conditional statements. Check out the Tutorial tab for learning materials and an instructional video!

// Task
// Given an integer, , perform the following conditional actions:

// If  is odd, print Weird
// If  is even and in the inclusive range of  to , print Not Weird
// If  is even and in the inclusive range of  to , print Weird
// If  is even and greater than , print Not Weird
// Complete the stub code provided in your editor to print whether or not  is weird.

// Input Format

// A single line containing a positive integer, .

// Constraints

// Output Format

// Print Weird if the number is weird; otherwise, print Not Weird.

// Sample Input 0

// 3
// Sample Output 0

// Weird
// Sample Input 1

// 24
// Sample Output 1

// Not Weird
// Explanation

// Sample Case 0:
//  is odd and odd numbers are weird, so we print Weird.

// Sample Case 1:
//  and  is even, so it isn't weird. Thus, we print Not Weird.
/////////////// ignore above this line ////////////////////


// 1,3,5 // weird
// 2,4 // not wierd
// 6,8,10,12,14,16,18 // Weird
// even& 20<  // not weird
// Weird // wird
function main() {
    var N = parseInt(readLine());

}
>>>>>>> 22f6c5fe3bd98b59ac491d425ab3ca585c331041
