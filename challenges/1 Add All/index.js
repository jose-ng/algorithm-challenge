/*
Title: Add All
Description: Given a list, add up all the numbers in the list. 
Do not use any built in methods like map, forEach and reduce.
use recursion for this challenge
*/

function add(arr, index = 0, total = 0) {
  total += arr[index];
  if (index === arr.length - 1) {
    return total;
  }
  index++;
  return add(arr, index, total);
}

module.exports = add;
