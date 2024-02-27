const op = require("./alphanumeric-string-sort");

describe("Alphanumeric String Sort", () => {
  it("Test input 1", () => {
    expect(op("2.a,-n967AB8.")).toBe("naBA79862.,-.");
  });

  it("Test input 2", () => {
    expect(op(" ssAx009¨¨.´QQ")).toBe("xssQQA900 ¨¨.´");
  });
});
