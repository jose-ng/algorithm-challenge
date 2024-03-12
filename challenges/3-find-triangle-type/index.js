/*
Title: Find triangle type
Description: According to Pythagoras theorem, square of hypotenuse is equal to the sum of the two squares on the legs. By 
Using this concept create an algorithm that reads the two legs as well as the hypotenuse and returns what type 
of triangle is: acute, obtuse or right.
*/

function findTriangleType(a, b, c) {
  const aSquared = a * a;
  const bSquared = b * b;
  const cSquared = c * c;

  if (cSquared === aSquared + bSquared) {
    return "This is an Right Triangle";
  } else if (cSquared < aSquared + bSquared) {
    return "This is an Acute Triangle";
  } else {
    return "This is an Obtuse Triangle";
  }
}

module.exports = findTriangleType;
