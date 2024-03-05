/*
Title: Pascal’s Triangle
Description: Given numRows, generate the first numRows of Pascal’s triangle.
*/

function getTriangle(size) {
  if (size < 1) return "Invalid";
  const triangle = [[1]];
  if (size === 1) return triangle;
  let i = 1;
  do {
    const newLineLength = triangle[i - 1].length + 1;
    let prevPos = 0;
    for (let j = 0; j < newLineLength; j++) {
      if (j === 0) {
        triangle.push([1]);
      } else if (j === newLineLength - 1) {
        triangle[i][j] = 1;
        prevPos = 0;
      } else {
        triangle[i][j] =
          triangle[i - 1][prevPos] + triangle[i - 1][prevPos + 1];
        prevPos++;
      }
    }
    i++;
  } while (i < size);

  return triangle;
}

module.exports = getTriangle;
