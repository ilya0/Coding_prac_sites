
var lettermap = "abcdefghijklmnopqrstuvwxyz";
var matchstring ="";
var strlength ="";




function fearNotLetter(str) {
   matchstring = lettermap.splice(lettermap.indexOf(lettermap),str.length);
  strlength = str.length;

  
  return matchstring;
}




//create a map
// start matching, if they dont match return the letter



fearNotLetter("abce");