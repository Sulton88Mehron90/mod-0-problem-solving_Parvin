// ### Directions
// Solve at least 3 of the challenges below. 
// Create a file using the language for your program (`challenge1.rb` or `challenge1.js`) 
// for each of the challenges you select. For each challenge you complete, include comments 
// showing the **overall goal** in your own words, your **pseudocode**, and your **final solution**. 

// 1. Given an array of strings, return only the strings that have exactly 4 characters.

// the goal is to identify 4 letter items in my closet. Created variable named `myCloset` that consist of
// array of strings. Used a loop, `.length` method and if statement. if if statemnt checked if the length of 
// variable is strictly equal to 4 and output a list of items that have 4 letters in them.

var myCloset = ["hat1", "dress", "pants", "sock", "pins"];
for(i=0; i< myCloset.length; i++){
  if(myCloset[i].length === 4){
   console.log(myCloset[i]);
  }
}

// 1. Start with an array of strings with a mix of uppercase and lowercase letters. 
// Print every word in all lowercase letters.

// variable named `myMix` has an array string of names that have lower and upper case letters in them.
// for statemnet to go through the loop, entier array string leangth and output is the names in array string
// all in lower cases with the help of the `toLocaleLowerCase()` array method.

var myMix = ["pArVin","SulTON","MeHrOn",'fariShta'];
for(i=0;i<myMix.length;i++){
    console.log(myMix[i].toLocaleLowerCase());
}

// 1. Given an array of strings, return only the words that begin with the letter "t".
// created a `var` named myNames consist of string arrays of names. using `for` statement looped through 
// array string and identified for `==='t'` names. printed out the names that include lower case 't' in them.

var myNames = ["tom", "TetGyla", "tina", "Anna", "toma", "Lacy"];

for(i=0; i< myNames.length; i++) {
if (myNames[i].charAt(0) === 't') {
    console.log(myNames[i]);
  } 
}

// 1. Start with an array of strings. Print only the words that include the letter combination "ing".

// 1. Start with an array of travel destinations. Print every travel destination in alphabetical order 
// embedded in a sentence using string interpolation. For example, if the destination is "New York City", 
// print something like "The next place I want to visit is New York City!" 

// 1. Given a sentence with only lowercase letters, print the same sentence with the first letter of 
// every word capitalized. For example, if you were given "Turing is the best", return "Turing Is The Best" 
// instead!

