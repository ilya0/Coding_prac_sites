
function titleCase(str) {
  var stringarray = str.toLowerCase().split(" ");
  var capitalizedarray = "";

  for(i=0; i< stringarray.length; i++){
    var firstletter = stringarray[i].charAt(0).toUpperCase();
    var ending = stringarray[i].slice(1);
    var concatword = firstletter.concat(ending);


     capitalizedarray+=" "+concatword;

  }
  return capitalizedarray;
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

