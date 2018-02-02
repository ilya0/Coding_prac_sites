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

var name = "No such contact";
var index;
var property;
var object;
var counter = 0;

function lookUpProfile(firstName, prop) {
    //check for the name
    // loop throught the contacts

    //if the name exists
    //if the property eists
    //return property
    ///else return no property
    //if name doesnt exist

    for (i = 0; i < contacts.length; i++) { // go into each sub array and check the name
        if (contacts[i].firstName == firstName) { // if name exists change name to firstN
            object = contacts[i];
        } else {
            counter++;
        }

    }
    if (counter == contacts.length) {
        return "No such contact";
    }


    if (object.hasOwnProperty(prop)) {
        return object[prop];
    } else {
        return "No such property";
    }


}



// Change these values to test your function
lookUpProfile("Bob", "number");