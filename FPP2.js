// Store the Latin alphabet in a variable with all letters in lowercase.
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Find the index of the first letter of Ceaser's friend. Store it in a variable.
const firstLetter = friend[0]; //Access the first letter of Ceaser's friend.
const index = alphabet.indexOf(firstLetter.toLowerCase()); //Use a method on the alphabet to find indexes of given strings.

// Oh, I know B is the 2nd letter of the alphabet. Then, why the result is 1 instead of 2?
// ANSWER: zero-based indexing signifies the first item of a string is 0.

//Use the Caesar Cipher technique to shift the first letter of Caesar's friend by the given shift value, which is 3 positions. Find and store the encrypted letter in a variable.
const newIndex = index + shiftValue;
const encryptedFirstLetter = alphabet[newIndex];

// If we continue shifting letters and go beyond the last letter, "z", which operator could help us to wrap around and continue from the beginning of the alphabet?
// ANSWER: The modulus operator, %, helps us wrap around the alphabet. 

// Determine the length of the alphabet.
const alphabetLength = alphabet.length;

// Use the Caesar Cipher technique to shift the first letter of Caesar's friend by the given shift value, ensuring the shift wraps around the alphabet if it exceeds.
const alphabetLength = alphabet.length;
const newIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex];

// Caesar remembers that Brutus is particularly fond of challenges. Before sending the encrypted message, Caesar decides to send only a part of it as a teaser. Extract the first 3 characters from the encrypted message using the slice method. (Assume that the encrypted message is "EUXWXV".)
const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3);












