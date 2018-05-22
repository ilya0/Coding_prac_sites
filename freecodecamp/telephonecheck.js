
function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}
telephoneCheck("555-555-5555");

=====

function telephoneCheck(str) {
  //take out -
  // taje out ( and  )
  // take out spaces
  
  //tests
  //first number is 1
  //has 7 digits
  var string = str.replace(/(\(|\))|[a-z]|-|\s/gi,"");
  console.log(string);
    if(string.length > 11 || string.length < 10 ){
       console.log("greater than 11");
      return false;
     
    }else if(string[0] != 1 && string.length == 11){
      console.log("1 is not first");
      return false;
      
    }
      else if(string.match(/[a-z]/gi) == []){
       
       console.log("letter found");
        return true;
        
      }else if(isNaN(str[0]) == true && str[0] !="(" ){
        console.log("str0 is"+str[0] );
               return false;
       }
    
    //else if(string){  //need case for matching paren  }
    
    
    
    
    
    else{
      console.log("no cases found");
         return true;
       }
       
    
    
    
    }
  
  
  
  
  telephoneCheck("5555555555");