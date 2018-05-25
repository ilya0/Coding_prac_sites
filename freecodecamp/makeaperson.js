
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
  var firstName = firstAndLast.split(" ");
  var lastName;
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFirstName = function(firstName){};
  this.getFullName = function(lastName) { return firstName + lastName;};
  
    return firstName;
};

var bob = new Person('Bob Ross');
bob.getFullName();
