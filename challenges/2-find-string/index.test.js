const op = require("./index");

describe("Find string and return entire line of text", () => {
  it("Test input 1", () => {
    expect(op("notation")).toBe(
      "Line 1: In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.\nLine 2: In analytic number theory, big O notation is often used to express a bound on the difference between an arithmetical function and\nLine 4: Big O notation is also used in many other fields to provide similar estimates."
    );
  });

  it("Test input 2", () => {
    expect(op("fields")).toBe(
      "Line 4: Big O notation is also used in many other fields to provide similar estimates."
    );
  });

  it("Test input 3", () => {
    expect(op("requirements, similar")).toBe(
      "Line 1: In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.\nLine 4: Big O notation is also used in many other fields to provide similar estimates."
    );
  });
});
