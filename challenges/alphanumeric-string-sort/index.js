/*
Title: Alphanumeric String Sort
Description:
Taking a string as input sort the string characters with the following rules:
- Numbers go after Letters
- Uppercase letters go after Lowercase
- Odd numbers go before Even numbers
- Any character that is not a letter or number should go after the letters and numbers
*/

function alphanumericStringSort(str) {
  const letters = str.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ]/g, '');
  const numbers = str.replace(/[^0-9]/g, "");
  const notLetters = str.replace(/[0-9a-zA-ZÀ-ÖØ-öø-ÿ]/g, '');

  const sortedNumbers = numbers
    .split("")
    .sort((a, b) => {
      return (a % 2) - (b % 2);
    })
    .reverse()
    .join("");

  const sortedLetters = letters
    .split("")
    .sort((a, b) => {
      if (a === a.toUpperCase() && b === b.toUpperCase())
        return 0
      else return a === a.toUpperCase() ? 1 : -1;
    })
    .join("");

  return sortedLetters + sortedNumbers + notLetters;
}

module.exports = alphanumericStringSort;
