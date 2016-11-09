var rotatearray = function(arrayinput,rotation){
  var temparray = arrayinput;
  var rotatecounter = 0;

  while(rotatecounter < rotation){
    var rotateholder = temparray.slice(0,1);
    temparray.shift();
    temparray.push(roatateholder)


    roatatecounter++;

  }
}
