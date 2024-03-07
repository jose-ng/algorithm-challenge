const op = require("./index");

describe("Add All", () => {
  it("Test input 1", () => {
    expect(op([2, 7, 8, 3, 1, 4])).toBe(25);
  });

  it("Test input 2", () => {
    expect(op([20, 70, 80, 30, 10, 40])).toBe(250);
  });
});
