// My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

// "dolphin" -> "The Dolphin"

// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

// "alaska" -> "Alaskalaska"

// Complete the function that takes a noun as a string, and returns her preferred band name written as a string.


package kata



func bandNameGenerator(word string) string {
// Happy coding

return word[0]

}


// if string[0] and string[end] 
//then add "The" and Cap
// dolphin -> The Dolphin

//if not 
// save first letter
//capitalize first letter
//save rest of the word
//concatinate cap letter + restof word + restof word

// ends and starts with same letter  alaska -> Alaskalaska