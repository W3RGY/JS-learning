// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	  let result = "";
	  text = text.toLowerCase();
	  for (let i = 0; i < text.length; i++) {
		if (alphabet.indexOf(text[i]) !== -1) {
		  result += (alphabet.indexOf(text[i]) + 1) + " ";
		}
	  }
	  return result.trim();
}
console.log(alphabetPosition("Hello World!"));

// This code takes in a string as an input, converts it to lowercase, iterates through each character in the string, checks if the character is a letter by checking its index in the alphabet string, and if it is a letter, adds the index + 1 to the result. If the character is not a letter, it is ignored. The final result string has all non-letter characters removed and letters replaced with their position in the alphabet.

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// The toLowerCase() method returns the calling string value converted to lower case.
// The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.