

function sumFibs(num) {

  var n1 = 1;
  var n2 = 1;
  var n3;
  console.log(n1);
  console.log(n2);
  for(var i = 0; i<num; i++){
    n3 = n1 + n2;
    
    console.log(n3);
    n1 = n2;
    n2 = n3;
}
}

sumFibs(1);