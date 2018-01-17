
function palindrome(str) {
var cleaned = str.toLowerCase().replace(/[\W_]/g, ''); // replace the non letters
var removewhite = cleaned.replace(/[\W_]/g, ''); ///remove whitespace

var orgrev = removewhite.split('').reverse().join('');

    if( orgrev === removewhite){
    return true;
  }else{
    return false;
  }




}
palindrome("1 eye for of 1 eye.");

//racecar
