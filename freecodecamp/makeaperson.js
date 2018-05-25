


var Person = function(firstAndLast) {
  
  var fullNameArray = firstAndLast.split(" ");
  console.log(fullNameArray);
  this.setFirstName = function(firstName){ fullNameArray[0] = firstName;};
  this.setLastName = function(lastName){ fullNameArray[1] = lastName;};
  this.setFullName = function(fandl){ 
    fullNameArray = fandl.split(" ");
  return fullNameArray;};
  
  
  this.getFullName = function(){ return fullNameArray;}; 
  this.getFirstName = function(){ return  fullNameArray[0];};
  this.getLastName  = function(){ return fullNameArray[1];};
  this.getFullName = function() { return fullNameArray[0] +" " +fullNameArray[1] ;
};
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
