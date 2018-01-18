confirmending.js

function confirmEnding(str, target) {
  var strcomp = str.split(" ").join("");  //comped string /walkingonwater..
  var targetcount = target.length; //length of target string /13

  //starting pioint = length of str - target count
  //need cut part of str to match with target
   var count = str.length - (targetcount+1); // 75
   var cutstr = strcomp.substring(count);

  if(target == cutstr){
    return true;
  }else{
    return false;
  }


}

// 75 13 62
confirmEnding("He has to give me a new name", "name");


----
function confirmEnding(str, target) {
  return (str.substr(-target.length) == target)  ? true  : false;
}

confirmEnding("Bastian", "n");
