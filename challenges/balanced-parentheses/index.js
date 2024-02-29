/*
Title: Balanced parentheses
Description:
Given a string that may contain parentheses validate if it has all being and ending parentheses
*/

function isValidBalancedParenthses(str) {
  let parenthesesOpened = "";
  let parenthesesClosed = "";
  for (const l of str) {
    if (l === "(" && !parenthesesClosed) parenthesesOpened += "(";
    else if (l === ")" && parenthesesOpened) {
      parenthesesOpened = parenthesesOpened.substring(
        0,
        parenthesesOpened.length - 1
      );
      parenthesesClosed = parenthesesClosed.substring(
        0,
        parenthesesClosed.length - 1
      );
    } else if (l === ")" && !parenthesesOpened) {
      parenthesesClosed += ")";
    }
  }
  return parenthesesOpened.length === parenthesesClosed.length
    ? "valid"
    : "invalid";
}

module.exports = isValidBalancedParenthses;

/*console.log(isValidBalancedParenthses(")abc()def("));
console.log(isValidBalancedParenthses("()"));
console.log(isValidBalancedParenthses("(hello, world)"));
console.log(isValidBalancedParenthses("Random text (as this) is ok()."));
console.log(isValidBalancedParenthses(")("));
console.log(isValidBalancedParenthses("(Hello (,) world (!))"));
console.log(isValidBalancedParenthses(")()("));
console.log(isValidBalancedParenthses("())(()"));
console.log(isValidBalancedParenthses("(((((())))))"));
console.log(isValidBalancedParenthses("(((h(j(k(l))))))"));
console.log(isValidBalancedParenthses("(((((()))()))"));*/
