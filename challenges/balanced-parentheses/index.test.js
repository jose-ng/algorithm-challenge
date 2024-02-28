const op = require("./index");

describe("Balanced parentheses", () => {
  it("Test input 1", () => {
    expect(op("())(())")).toBe("invalid");
  });
  it("Test input 2", () => {
    expect(op("()")).toBe("valid");
  });
  it("Test input 3", () => {
    expect(op("(hello, world)")).toBe("valid");
  });
  it("Test input 4", () => {
    expect(op("Random text (as this) is ok().")).toBe("valid");
  });
  it("Test input 5", () => {
    expect(op(")(")).toBe("invalid");
  });
  it("Test input 6", () => {
    expect(op("(Hello (,) world (!))")).toBe("valid");
  });
  it("Test input 7", () => {
    expect(op(")()(")).toBe("invalid");
  });
  it("Test input 8", () => {
    expect(op("())(()")).toBe("invalid");
  });
  it("Test input 9", () => {
    expect(op("(((((())))))")).toBe("valid");
  });
  it("Test input 10", () => {
    expect(op("(((h(j(k(l))))))")).toBe("valid");
  });
  it("Test input 11", () => {
    expect(op("(((((()))()))")).toBe("invalid");
  });
});
