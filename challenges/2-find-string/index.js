/*
Title: Find string and return entire line of text
Description: Within a string or file that has multiple lines of text you need to find the word 
(or words separated by comma) especified and return the entire line where there is a match.
*/

const stringInput = `In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.
  In analytic number theory, big O notation is often used to express a bound on the difference between an arithmetical function and
  a better understood approximation; a famous example of such a difference is the remainder term in the prime number theorem. 
  Big O notation is also used in many other fields to provide similar estimates.`;

function findLines(wordsInput, stringInput) {
  const words = wordsInput.split(",");
  let lines = [];
  let result = [];
  if (!stringInput)
    stringInput = require("fs").readFileSync(
      require("path").resolve(__dirname, "input.txt"),
      "utf8"
    );
  lines = stringInput.split("\n").map((x) => x.trim());
  for (const w of words) {
    let i = 1;
    const reduced = lines.reduce((acc, line) => {
      if (line.includes(w)) acc.push(`Line ${i}: ${line}`.trim());
      i++;
      return acc;
    }, []);
    result = result.concat(reduced);
  }
  result = [...new Set(result)];
  return result.join("\n");
}

module.exports = findLines;
