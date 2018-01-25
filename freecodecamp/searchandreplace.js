searchandreplace.js



function myReplace(str, before, after) {
  var splicedstring = "";
  if(before[0] == before[0].toUpperCase()){  //if before is capitalized,
    var aftersplit = after.split('');
    var capletter = aftersplit[0].toUpperCase();
    var body = aftersplit.splice(1,after.length).join('');
    var capitalizedword = capletter+body;
     splicestring = str.replace(before, capitalizedword);
  }else{
     splicestring = str.replace(before, after);
  }

  return splicestring;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");



----

function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
