
function telephoneCheck(str) {
    //take out -
    // taje out ( and  )
    // take out spaces
    
    //tests
    //first number is 1
    //has 7 digits
    var string = str.replace(/-|\s/g,"");
    
      if(string.length > 11){
        return false;
      }else if(string[0] != 1){
        return false;
      }
        else if(string.match(/[a-z]/gi) == []){
          return true;
        }
      
      
      }
    
    
    
    
    telephoneCheck("1(555)555-5555");