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
  const letters = str.split("").sort().reverse().join("").replace(/[^a-zA-Z]/g, "");  
  const numbers = str.replace(/[^0-9]/g, "");
  const notLetters = str.replace(/[0-9a-zA-Z]/g, "");
  
  const sortedNumbers = numbers
    .split("")
    .sort((a, b) => {
      return (a % 2) - (b % 2);
    })
    .reverse()
    .join(""); 
  
  return letters + sortedNumbers + notLetters;
}

module.exports = alphanumericStringSort;
