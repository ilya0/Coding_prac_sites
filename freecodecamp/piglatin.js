function translatePigLatin(str) {

    var consonants = ['a', 'e', 'i', 'o', 'u'];
    var consCount = [];
    var startcut;
    var splitstring;

    // take string and split
    // go through first nad second letters to see if they ar consonants
    // if first is add ay and return
    // if not, go to second
    // indexOf a,e,i,o,u
    // into array, find smalles
    // to create split str.substr(start,end); + str.substr(start,end);


    splitstring = str.split("");

    if (consonants.indexOf(splitstring[0]) == -1) {

        for (i = 0; i < splitstring.length; i++) {
            if (consonants.indexOf(splitstring[i]) != -1) {
                consCount.push(i);
            }
            startcut = consCount[0];


        }
        return str.substr(startcut, str.length) + str.substr(0, startcut) + "ay";

    } else {

        return str + "way";


    }


}

translatePigLatin("glove"); //cons at 1,4,6