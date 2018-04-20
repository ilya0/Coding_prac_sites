

function sumFibs(num) {

  var n1 = 1;
  var n2 = 0;
  var n3;
  var sum =0;
  var holdarray =[];
  console.log(n1);
  console.log(n2);
  
  for(var i = 0; i<num; i++){
    n3 = n1 + n2;
    holdarray.push(n3)
    console.log(holdarray);
    
    if(n3%2 === 0){
      sum = sum+n3;
    }else{
      
    }
    
    n1 = n2;
    n2 = n3;
}
  console.log(sum);
}

sumFibs(10);