
function binaryAgent(str) {
  var words;
  var sum;
  var strarray = [];

  str = str.split(" ");

  for(var i=0; i < str.length; i++){
    sum = 0;
    for(var j=0; j < str[i][j].length; j++){

      if(j == 0){
       sum += str[i][j]*128;
      }

    }

  }
  return sum;
}

binaryAgent("11000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
