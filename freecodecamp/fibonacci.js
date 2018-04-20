

function sumFibs(num) {

  var n1 = 1;
  var n2 = 0;
  var n3 = 0;
  var sum =0;
  var holdarray =[];
  
  while(n3<=num){
    
    

    
    if(n3%2 !== 0) {
      sum = sum+n3
      holdarray.push(n3)
      };
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    
    console.log(holdarray);
}
  console.log("sum is "+sum);
}

sumFibs(4); // should be 5
sumFibs(1000) //1785