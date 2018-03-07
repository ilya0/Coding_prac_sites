
var lettermap = "abcdefghijklmnopqrstuvwxyz";
var matchstring ="";
var strlength ="";




function fearNotLetter(str) {
   matchstring = lettermap.slice(lettermap.indexOf(str[0]),str.length);

  for(i=0; i< str.length; i++){
    if(str[i] !== matchstring[i]){
      return matchstring[i];
    }
  }

  
  return matchstring;
}




//create a map
// start matching, if they dont match return the letter



fearNotLetter("abce");
