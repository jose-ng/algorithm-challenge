const op = require("./index");

describe("Find string and return entire line of text", () => {
  it("Test input 1", () => {
    expect(op(17, 13, 23)).toBe(
      "This is an Obtuse Triangle"
    );
  });

  it("Test input 2", () => {
    expect(op(45, 55, 70)).toBe(
      "This is an Acute Triangle"
    );
  });

  it("Test input 3", () => {
    expect(op(80, 84, 116)).toBe(
      "This is an Right Triangle"
    );
  });
});
