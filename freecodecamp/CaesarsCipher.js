
function rot13(str) { // LBH QVQ VG!
    var shifted =  "NOPQRSTUVWXYZABCDEFGHIJKLM";
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var decoded = "";
  
    for(i=0; i < str.length;i++){
  if(shifted.indexOf(str[i]) == -1){
    decoded += str[i];
  }else{
    decoded += alphabet[shifted.indexOf(str[i])];
  }
      
    }
    return decoded;
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");
  