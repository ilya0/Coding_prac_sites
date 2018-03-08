//Setup
var contacts = [{
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
},
{
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
},
{
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
},
{
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["Javascript", "Gaming", "Foxes"]
}
];



function lookUpProfile(firstName, prop) {

    for (i = 0; i < contacts.length; i++){ // go into each sub array and check the name
        
        if (contacts[i].firstName === firstName) { // if name exists change name to firstN
            if (contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
       
      
    }
 return "No such contact";
}



// Change these values to test your function
lookUpProfile("Kristian", "lastName");