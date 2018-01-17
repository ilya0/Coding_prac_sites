
function titleCase(str) {
  var stringarray = str.toLowerCase().split(" ");
  var capitalizedarray = "";

  for(i=0; i< stringarray.length; i++){
    var firstletter = stringarray[i].charAt(0).toUpperCase();
    var ending = stringarray[i].slice(1);
    var concatword = firstletter.concat(ending);

    if(i<1){
      capitalizedarray+=concatword;
    }else{
     capitalizedarray+=" "+concatword;
    }

  }
  capitalizedarray = '"'+capitalizedarray+'"';
  return capitalizedarray;
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");




------intermediate code solution

function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");



----advanced


function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}
