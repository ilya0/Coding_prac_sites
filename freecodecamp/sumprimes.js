
function sumPrimes(num) {
  var arraything = [];
  
  for (var counter = 0; counter <= num; counter++){
      var notPrime = false;
  
      for (var i = 2; i <= counter; i++) {
        
          if (counter%i===0 && i!==counter) {
              notPrime = true;
              
          }
      }
    
      if (notPrime === false) {
          console.log(counter);
          arraything.push(counter);
      }
    
  }
  
      
      return arraything.reduce(function(total, amount){
          return total + amount;
        }
      )-1;
    }
    sumPrimes(977); // 1,3,5,7,9
    