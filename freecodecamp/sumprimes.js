
function sumPrimes(num) {
    var holdarray =[];
   
    for(var i = 0; i<num; i++){
      if(i%2!==0 || i%3!==0 || i%5!==0 || i%7!==0 ){
        console.log("prime number is "+i);
        holdarray.push(i);
      }
      
      
    }
    
    return holdarray.reduce( 
      function(total, amount){
        return total + amount;
      }
    );
  }
  sumPrimes(10); // 1,3,5,7,9
  