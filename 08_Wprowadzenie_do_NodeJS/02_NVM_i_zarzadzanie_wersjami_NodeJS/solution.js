// const hello = (...nameLetters) => {
//   const phrase = `Hello, World and you, ${nameLetters.join('')}!`;
//   return phrase;
// };

// // Build name using new language features
// const name = 'Johnny'.split('');
// const finalPhrase = hello(...name);

// console.log(finalPhrase);


var hello = (...nameLetters) => {
  var phrase = `Hello, World and you, ${nameLetters.join('')}!`;
  return phrase;
};

// Build name using new language features
var name = 'Johnny'.split('');
var finalPhrase = hello(...name);

console.log(finalPhrase);